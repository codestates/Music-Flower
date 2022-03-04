import { useState, useEffect } from "react";
import spotifyAuth from "../auth/useSpotifyAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSerchResult";
import SavePlayList from "./SavePlayList";

const spotifyApi = new SpotifyWebApi({
  clientId: "91b9b462242b430aa59363c6adeda3fc",
});

export default function SpDashboard({ code }) {
  const accessToken = spotifyAuth(code);
  // console.log("accesstoken", accessToken);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  console.log("searchResult", searchResult);
  console.log("playList", playlist);
  function chooseTrack(track) {
    setPlayingTrack(track);
    setPlaylist([...playlist, track]);
    setSearch("");
  }

  useEffect(() => {
    console.log("accessToek");
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, playlist]);

  useEffect(() => {
    console.log("use Effect 트랙가져오기");
    if (!search) return setSearchResult([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      console.log("cancel", cancel);
      if (cancel) return;
      console.log(res.body.tracks.items);
      setSearchResult(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
      <div>
        {playlist.map((track) => (
          <SavePlayList track={track} key={track.uri} />
        ))}
      </div>
      <div>
        <input
          type="search"
          name="q"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      {searchResult.map((track) => (
        <TrackSearchResult
          track={track}
          key={track.uri}
          chooseTrack={chooseTrack}
        />
      ))}
    </div>
  );
}

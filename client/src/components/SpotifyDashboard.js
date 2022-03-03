import { useState, useEffect } from "react";
import spotifyAuth from "../auth/useSpotifyAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "26044bd61ea049d4a54e2798864d988b",
});

export default function SpDashboard({ code }) {
  const accessToken = spotifyAuth(code);
  // console.log("accesstoken", accessToken);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const playlist = [];

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, playlist]);

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (!accessToken) return;

    // let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      console.log("res");
    });
  }, [search, accessToken]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      {code}
    </div>
  );
}

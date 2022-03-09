import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div
      className="trackserchresult"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <div className="serchMusicText">
        <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
        <span>{track.title}</span>
        <span className="serchArtist">{track.artist}</span>
        <div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

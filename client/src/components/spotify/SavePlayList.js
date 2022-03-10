import React from "react";

export default function SavePlayList({ track }) {
  return (
    <div className="trackserchresult">
      <div className="serchMusicText">
        <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
        <span> // </span>
        <span>{track.title}</span>
        <span> // </span>
        <span className="serchArtist">{track.artist}</span>
        <div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const SelectMusic = styled.div`
  border: 1px solid grey;
  padding: 10px 10px;
  display: flex;
  /* width: 40vh; */
  justify-content: space-between;
  > #musicInfo {
    display: flex;
    width: 30vh;
    > div {
      margin-left: 10px;
    }
  }
`;

export default function SelectMusicList({
  music,
  idx,
  musicList,
  setMusicList,
}) {
  console.log("music:", music);
  console.log("idx:", idx);

  const clickHandler = () => {
    let sliceLitData = musicList.slice();
    sliceLitData.splice(idx, 1);
    setMusicList(sliceLitData);
  };

  return (
    <div className="trackserchresult">
      <SelectMusic>
        <div id="musicInfo">
          <img
            src={music.musicImage}
            style={{ height: "64px", width: "64px" }}
          />
          <div>
            <div>{music.musicTitle}</div>
            <div id="serchArtist">{music.artist}</div>
          </div>
        </div>

        <button onClick={clickHandler}>삭제</button>
      </SelectMusic>
    </div>
  );
}

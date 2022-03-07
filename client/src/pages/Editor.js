import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { MusicSelector } from "../components/UI_components/MusicSelector";
import SpotifyAPP from "../components/SpotifyApp";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

const EditorBody = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: auto;
  > div {
    border: 1px solid red;
    padding: 10px;
    display: flex;

    > div {
      border: 1px solid red;
      padding: 10px;
    }
  }
  > #up {
    flex: 1 0 auto;
    > #postImg {
      flex: 1 0 auto;
    }
    > #postInfo {
      flex: 2 0 auto;
    }
  }
  > #down {
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > #postIntro {
      display: flex;
      flex: 1 0 auto;
      > textarea {
        width: 100vw;
      }
    }
    > #musicList {
      flex: 4 0 auto;
      > #music {
        border: 1px solid red;
        padding: 10px;
      }
    }
  }
`;

export default function Editor({ meetCode }) {
  const [musicList, setMusicList] = useState([]);

  const history = useHistory();
  const onClickMainPageHandle = () => {
    history.push("/main");
  };

  return (
    <div id="editorPage">
      <EditorBody>
        <button onClick={onClickMainPageHandle}>메인으로 돌아가기</button>
        <div id="up">
          <div id="postImg">
            이미지
            <br />
            (어케올리지???) 있는 이미지 중에서 선택?
          </div>
          <div id="postInfo">
            post 정보
            <div>
              post 제목
              <input type="textarea"></input>
            </div>
          </div>
        </div>
        <div id="down">
          <div>post 소개</div>
          <div id="postIntro">
            <input type="text" id=""></input>
          </div>

          <div id="musicList">
            음악 리스트
            {/* <SpotifyAPP meetCode={meetCode} /> */}
            <MusicSelector
              musicList={musicList}
              setMusicList={setMusicList}
            ></MusicSelector>
            {musicList.map((e) => {
              return (
                <div id="musicList" key={e.albumImageUrl}>
                  <img
                    src={e.albumImageUrl}
                    style={{ height: "64px", width: "64px" }}
                  />
                  <span> // </span>
                  <div>{e.songName}</div>
                  <div className="serchArtist">{e.artist}</div>
                </div>
              );
            })}
            {/* <div id="music">music</div>
            <div id="music">music</div>
            <div id="music">music</div> */}
          </div>
        </div>
      </EditorBody>
    </div>
  );
}

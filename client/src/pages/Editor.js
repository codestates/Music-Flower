import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { MusicSelector } from "../components/UI_components/MusicSelector";
import { Link } from "react-router-dom";

const EditorBody = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1080px;
  max-height: 1980px;
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
      > #textInput {
        background-color: #e3ecfe;
      }
    }
  }
  > #down {
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > #postIntro {
      display: flex;
      flex: 1 0 auto;
      > #textInput {
        background-color: #e3ecfe;
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
const Header = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */

  display: flex;
  margin-bottom: 2rem;
  left: 0px;
  top: 0;
  border-bottom: 1px solid #d1d4d9;
  position: sticky;
  background-color: rgba(255, 255, 255, 0.96);
  > div {
    /* border: 1px solid red; */
    /* padding: 10px; */
    flex: 1 0 auto;
  }
`;
const Menu = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */

  display: flex;
  flex: 4 0 auto;
`;
const Nick = styled.div`
  /* //border: 1px solid red; */
  /* padding: 10px; */
  text-align: center;
  margin-top: 20px;
  flex: 3 0 auto;
  > span {
    color: #a14efc;
  }
`;
const MenuButton = styled.div`
  // border: 1px solid red;
  /* padding: 10px; */
  margin-top: 10px;
  display: flex;
  width: 220px;
  > button {
    //border: 1px solid red;
    /* padding: 10px; */
    border: 0;
    background-color: white;
    cursor: pointer;
    margin: 10px;
    margin-top: 0px;
    height: 40px;
    font-size: 16px;
  }
  > button:hover {
    color: #a14efc;
  }
`;
export default function Editor({ handleLogout, handleMainPage }) {
  const [musicList, setMusicList] = useState([]);

  return (
    <div id="editorPage">
      <Header>
        <Link to="/" className="nav-logo">
          <img src={require("../images/logo.png")} width="220px" alt="logo" />
        </Link>
        <Menu>
          <Nick>
            <span>글 작성 페이지</span>
          </Nick>
          <MenuButton>
            <button onClick={handleMainPage}>메인페이지</button>
            <button onClick={handleLogout}>로그아웃</button>
          </MenuButton>
        </Menu>
      </Header>
      <EditorBody>
        <div id="up">
          <div id="postImg">
            이미지
            <br />
            (어케올리지???) 있는 이미지 중에서 선택?
          </div>
          <div id="postInfo">
            post 제목
            <input type="text" id="textInput"></input>
          </div>
        </div>
        <div id="down">
          <div>post 소개</div>
          <div id="postIntro">
            <input type="text" id="textInput"></input>
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

// import SpotifyAPP from "../components/SpotifyApp";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MusicSelector } from "./UI_components/MusicSelector";
import PostThumnailSelecter from "./UI_components/PostThumnailSelector";
import SelectMusicList from "./UI_components/SelectMusicList";

const EditorBody = styled.div`
  border: 3px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1080px;
  max-height: 1980px;
  > div {
    border: 1px solid grey;
    padding: 10px;
    display: flex;

    > div {
      /* border: 1px solid grey; */
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
        /* border: 1px solid grey; */
        padding: 10px;
        display: flex;
        justify-content: space-between;

        > div {
        }
        > #musicserch {
          width: 40vh;
        }
        > #musicselectList {
          /* border: 1px solid red; */
          margin-left: 60px;
          width: 40vh;

          /* flex: 2 0 auto; */
        }
      }
    }
  }
  > button {
    /* width: 150px; */
    margin-top: 10px;
    height: 50px;
    border: 1px solid grey;
    cursor: pointer;
    color: rgba(30, 22, 54, 0.6);
    box-shadow: rgba(119, 108, 153, 0.4) 0 0px 0px 2px inset;
    font-size: 16px;
    border-radius: 30px;
  }
  > button:hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 80px 0px 2px inset;
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
export default function Editor({
  handleLogout,
  handleMainPage,
  musicdata,
  userInfo,
  handleMypage,
  detailData,
  isRemake,
  postImage,
  setPostPoto,
  postTitle,
  setPostTitle,
  postExplain,
  setPostintro,
  musicList,
  setMusicList,

  serverURL,
}) {
  console.log("수정하기 버튼으로옴?:", isRemake);
  console.log("edit-detailData:", detailData);

  const submitHandle = () => {
    let musiclistid = musicList.map((el) => el.id);

    if (!postImage && !postTitle && !postExplain) {
      return alert("내용을 모두 작성해주세요");
    } else if (musicList.length === 0) {
      return alert("음악을 추가해 주세요");
    } else {
      axios
        .post(
          `${serverURL}/post`,
          {
            userId: userInfo.id,
            image: postImage,
            postTitle,
            postExplain,
            musicList: musiclistid,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => handleMypage());
      //console.log("전송정보", postData);
    }
  };
  const remakeHandle = () => {
    let musiclistid = musicList.map((el) => el.id);
    if (!postTitle && !postExplain) {
      setPostTitle(detailData.postTitle);
      setPostintro(detailData.postExplain);
      return alert("내용을 수정해주세요");
    } else if (musicList.length === 0) {
      return alert("음악을 추가해 주세요");
    } else {
      axios
        .put(
          `${serverURL}/post/${detailData.id}`,
          {
            userId: userInfo.id,
            image: postImage,
            postTitle,
            postExplain,
            musicList: musiclistid,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => handleMypage());
      //console.log("전송정보", postData);
    }
  };
  const postTitleChageHandle = (e) => {
    //console.log("title", e.target.value);
    setPostTitle(e.target.value);
  };
  const postInroChageHandle = (e) => {
    // console.log("Inro", e.target.value);
    setPostintro(e.target.value);
  };

  return (
    <div id="editorPage">
      <Header>
        <Link to="/" className="nav-logo">
          <img src={require("../images/logo.png")} width="220px" alt="logo" />
        </Link>
        <Menu>
          <Nick>
            {isRemake ? <span>수정 페이지</span> : <span>글 작성 페이지</span>}
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
            <PostThumnailSelecter
              setPostPoto={setPostPoto}
              detailData={detailData}
              isRemake={isRemake}
            ></PostThumnailSelecter>
          </div>
          <div id="postInfo">
            제목
            {isRemake ? (
              <input
                type="text"
                id="textInput"
                value={postTitle}
                onChange={postTitleChageHandle}
              ></input>
            ) : (
              <input
                type="text"
                id="textInput"
                onChange={postTitleChageHandle}
              ></input>
            )}
          </div>
        </div>
        <div id="down">
          <div>소개글</div>
          <div id="postIntro">
            {isRemake ? (
              <input
                type="textarea"
                id="textInput"
                value={postExplain}
                onChange={postInroChageHandle}
              ></input>
            ) : (
              <input
                type="textarea"
                id="textInput"
                onChange={postInroChageHandle}
              ></input>
            )}
          </div>

          <div id="musicList">
            음악 리스트
            <div id="music">
              <div id="musicserch">
                <MusicSelector
                  musicData={musicdata}
                  musicList={musicList}
                  setMusicList={setMusicList}
                ></MusicSelector>
              </div>
              <div id="musicselectList">
                {musicList.map((music, idx) => {
                  return (
                    <div key={music.albumImageUrl}>
                      <SelectMusicList
                        music={music}
                        idx={idx}
                        musicList={musicList}
                        setMusicList={setMusicList}
                      ></SelectMusicList>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {isRemake ? (
          <button onClick={remakeHandle}>수정완료</button>
        ) : (
          <button onClick={submitHandle}>작성완료</button>
        )}
      </EditorBody>
    </div>
  );
}

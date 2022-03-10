import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Detailbody = styled.div`
  border: 1px solid grey;
  /* padding: 200px; */
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1080px;
  max-height: 1980px;
  border-radius: 10px;

  > div {
    padding: 10px;
    display: flex;
  }
  > #up {
    flex: 1 0 auto;
    border: 1px solid grey;
    margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    > #postImg {
      flex: 1 0 auto;
    }
    > #postInfo {
      flex: 2 0 auto;

      > div {
        margin: 10px;

        > button {
          margin-left: 1rem;
          width: 70px;
          height: 25px;
          border: 1px solid grey;
          cursor: pointer;
          color: rgba(30, 22, 54, 0.6);
          font-size: 14px;
          border-radius: 30px;
        }
        > button:hover {
          color: rgba(255, 255, 255, 0.85);
          box-shadow: rgba(30, 22, 54, 0.7) 0 80px 0px 2px inset;
        }
        > h4 {
          color: #a14efc;
        }
      }
    }
  }
  > #down {
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > h3 {
      margin-left: 9px;
      border-bottom: 1px solid #c7cad0;
      padding-bottom: 7px;
    }
    > #postIntro {
      display: flex;
      flex: 1 0 auto;
      margin-left: 9px;

      > text {
        font-size: 17px;
        font-style: inherit;
        color: #767676;
      }
    }
    > #musicList {
      flex: 4 0 auto;
      margin-left: 9px;
      margin-top: 25px;
      > h3 {
        border-bottom: 1px solid #c7cad0;
      }

      > #music {
        border-bottom: 1px solid #c7cad0;
        padding: 10px;
        display: flex;
        > div {
          padding: 10px;
          font-size: 17px;
          font-style: inherit;
        }
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
  font-size: 20px;
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

export default function Detail({
  detailData,
  handleMainPage,
  userInfo,
  handleLogout,
  setIsRemake,
  handleMusicData,
  setPostPoto,
  setPostTitle,
  setPostintro,
  setMusicList,
  serverURL,
}) {
  const history = useHistory();

  console.log("디테일 컴포넌트 정보: ", detailData);
  const handleDelete = () => {
    axios
      .delete(`${serverURL}/post/${detailData.id}`)
      .then(() => handleMainPage());
  };
  const handleEdit = () => {
    setIsRemake(true);
    setPostPoto(detailData.image);
    setPostTitle(detailData.postTitle);
    setPostintro(detailData.postExplain);
    setMusicList(detailData.MusicData);

    handleMusicData();
    history.push("/editor");
  };

  return (
    <div id="detailPage">
      <Header>
        <Link to="/" className="nav-logo">
          <img src={require("../images/logo.png")} width="220px" alt="logo" />
        </Link>
        <Menu>
          <Nick>
            <span>{userInfo.nickname}</span>님 안녕하세요.
          </Nick>
          <MenuButton>
            <button onClick={handleMainPage}>메인페이지</button>
            <button onClick={handleLogout}>로그아웃</button>
          </MenuButton>
        </Menu>
      </Header>
      <Detailbody>
        <div id="up">
          <div id="postInfo">
            <div>
              <h1>{detailData.postTitle}</h1>
            </div>
            <div>
              <h4>{detailData.User.nickname}</h4>
            </div>
            {detailData.User.nickname === userInfo.nickname ? (
              <div>
                <button onClick={handleEdit}>수정하기</button>
                <button onClick={handleDelete}>삭제하기</button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div id="postImg">
            <img src={detailData.image} width="200vw" alt="postImg" />
          </div>
        </div>
        <div id="down">
          <h3>소개글</h3>
          <div id="postIntro">
            <text>{detailData.postExplain}</text>
          </div>
          <div id="musicList">
            <h3>음악 리스트</h3>
            {detailData.MusicData.map((e) => {
              return (
                <div id="music">
                  <div>
                    <img src={e.musicImage} alt="1" width="100vw"></img>
                  </div>
                  <div>
                    <div>
                      <text> {e.musicTitle}</text>
                    </div>
                    <div>
                      <text> {e.artist}</text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Detailbody>
    </div>
  );
}

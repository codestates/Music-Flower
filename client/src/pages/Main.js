import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Autocomplete } from "../pages/UI_components/Autocomplete";
import { Link } from "react-router-dom";

const MainPage = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */

  display: flex;
  text-align: center;

  flex-direction: column;
  > #bottom {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1080px;
    max-height: 1980px;
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

const SerchArea = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */

  margin-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 7rem;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;

  > #select_bar {
    /* border: 1px solid red; */
    /* padding: 10px; */

    width: 40vh;
    margin-left: 20px;
  }
  > #create_post {
    /* border: 1px solid red; */
    /* padding: 10px; */
    flex: 1 0 auto;

    > button {
      margin-left: 8rem;
      width: 150px;
      height: 38px;
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
  }
`;

const Body = styled.div`
  border: 1px solid gray;
  /* padding: 10px; */
  border-radius: 10px;
  /* background-color: rgb(84, 140, 255); */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  flex: 8 0 auto;
  > #Posts {
    display: flex;
    flex-wrap: wrap;
    margin-left: 7px;
  }
  > #BoardName {
    /* border: 1px solid red; */
    font-size: 25px;
    font-style: inherit;
  }
  > #thumnail {
    cursor: pointer;
  }
`;

const Footer = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */

  flex: 0 0 auto;
`;

//----------------------------------------------------------------

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
  margin-top: 20px;
  flex: 3 0 auto;
  > span {
    color: #a14efc;
  }
`;
const MenuButton = styled.div`
  //border: 1px solid red;
  /* padding: 10px; */
  margin-top: 10px;
  display: flex;
  width: 220px;
  > button {
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

export default function Main({
  items,
  userInfo,
  handleMusicData,
  handleLogout,
  handleDetailPage,
  handleMypage,
  setIsRemake,
  setPostPoto,
  setPostTitle,
  setPostintro,
  setMusicList,
}) {
  const [showPosts, setshowPosts] = useState(items);
  useEffect(() => {
    setshowPosts(items);
  }, [items]);

  const onClickMyPageHandle = () => {
    handleMypage();
  };
  const onClickEditorHandle = () => {
    setIsRemake(false);
    setPostPoto("");
    setPostTitle("");
    setPostintro("");
    setMusicList([]);
    handleMusicData();
  };

  return (
    <div id="mainPage">
      <MainPage>
        <Header>
          <Link to="/" className="nav-logo">
            <img src={require("../images/logo.png")} width="220px" alt="logo" />
          </Link>
          <Menu>
            <Nick>
              <span>{userInfo.nickname}</span>님 안녕하세요.
            </Nick>
            <MenuButton>
              <button onClick={onClickMyPageHandle}>마이페이지</button>
              <button onClick={handleLogout}>로그아웃</button>
            </MenuButton>
          </Menu>
        </Header>
        <div id="bottom">
          <SerchArea>
            <div id="select_bar">
              <Autocomplete
                items={items}
                setshowPosts={setshowPosts}
              ></Autocomplete>
            </div>
            <div id="create_post">
              <button className="12134" onClick={onClickEditorHandle}>
                글쓰기
              </button>
            </div>
          </SerchArea>
          <Body>
            <div id="BoardName">오늘은 뭘 듣지?</div>
            <div id="Posts">
              {showPosts.map((item, idx) => (
                <Postthumnails
                  handleDetailPage={handleDetailPage}
                  item={item}
                  key={idx}
                />
              ))}
            </div>
          </Body>
        </div>
        <Footer></Footer>
      </MainPage>
    </div>
  );
}

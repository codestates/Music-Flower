import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Autocomplete } from "../pages/UI_components/Autocomplete";
import { Switch, Route, useHistory, Link, Redirect } from "react-router-dom";
import axios from "axios";
// import { AUTH_URL } from "../components/SpotifyC";
// const cId = spotifyC;
// const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${cId}&response_type=code&redirect_uri=http://localhost:3000/editor&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

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
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  > #select_bar {
    /* border: 1px solid red; */
    /* padding: 10px; */

    flex: 2 0 auto;
    margin-left: 40px;
  }
  > #create_post {
    /* border: 1px solid red; */
    /* padding: 10px; */

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
  }
  > #BoardName {
    /* border: 1px solid red; */
    font-size: 30px;
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
  setItems,
  users,
  setDetailData,
  handleLogout,
  onClickDetailHandle,
}) {
  const onClickMyPageHandle = () => {
    history.push("/mypage");
  };
  const onClickEditorHandle = () => {
    history.push("/editor");
  };

  const history = useHistory();

  axios.get("http://localhost:8080/post").then((res) => console.log(res));

  return (
    <div id="mainPage">
      <MainPage>
        <Header>
          <Link to="/" className="nav-logo">
            <img src={require("../images/logo.png")} width="220px" alt="logo" />
          </Link>
          <Menu>
            <Nick>
              <span>{users.nickname}</span>님 안녕하세요.
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
              <Autocomplete items={items} setItems={setItems}></Autocomplete>
            </div>
            <div id="create_post">
              <button className="12134" onClick={onClickEditorHandle}>
                글쓰기
              </button>
            </div>
          </SerchArea>
          <Body>
            <div id="BoardName">이것은 예시입니다</div>
            <div id="Posts">
              {items.map((item, idx) => (
                <Postthumnails
                  onClickDetailHandle={onClickDetailHandle}
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

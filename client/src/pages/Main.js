import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Autocomplete } from "../components/UI_components/Autocomplete";
import { Switch, Route, useHistory, Link, Redirect } from "react-router-dom";
// import { AUTH_URL } from "../components/SpotifyC";
// const cId = spotifyC;
// const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${cId}&response_type=code&redirect_uri=http://localhost:3000/editor&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const MainPage = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  text-align: center;
  height: 96vh;
  width: auto;
  flex-direction: column;
`;

const Header = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 1 0 auto;

  > div {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 1 0 auto;
  }
`;

const SerchArea = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  > #select_bar {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 2 0 auto;
    margin-left: 40px;
  }
  > #create_post {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 1 0 auto;
  }
`;

const Body = styled.div`
  /* border: 1px solid red;
  padding: 10px; */
  display: flex;
  flex-wrap: wrap;
  flex: 8 0 auto;
`;

const Footer = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  flex: 0 0 auto;
`;

//----------------------------------------------------------------

const Menu = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 4 0 auto;
`;
const Nick = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  flex: 3 0 auto;
`;
const MenuButton = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 1 0 auto;
`;
const MenuButtonInner = styled.button`
  border: 1px solid red;
  /* padding: 10px; */

  margin: 10px;
  margin-top: 0px;

  flex: 1 0 auto;
  height: 40px;
`;

export default function Main({
  items,
  setItems,
  users,
  setDetailData,
  handleLogout,
  meetCode,
}) {
  const onClickMyPageHandle = () => {
    history.push("/mypage");
  };
  // const onClickEditorHandle = () => {
  //   history.push("/editor");
  // };
  const onClickDetailHandle = (postData) => {
    // 클릭하면 디테일데이터가 들어가야지 ㅇㅇ
    console.log("postData:", postData);
    setDetailData(postData);

    history.push("/detail");
  };

  const history = useHistory();
  // console.log("history:", history);
  return (
    <div id="mainPage">
      <MainPage>
        <Header>
          <Link to="/" className="nav-logo">
            <img src={require("../images/logo.png")} width="220px" alt="logo" />
          </Link>
          <Menu>
            <Nick>{users.nickname}님 안녕하세요.</Nick>
            <MenuButton>
              <MenuButtonInner onClick={onClickMyPageHandle}>
                마이페이지
              </MenuButtonInner>
              <MenuButtonInner onClick={handleLogout}>로그아웃</MenuButtonInner>
            </MenuButton>
          </Menu>
        </Header>

        <SerchArea>
          <div id="select_bar">
            <Autocomplete items={items} setItems={setItems}></Autocomplete>
          </div>
          <div id="create_post">
            {/* <button onClick={onClickEditorHandle}> */}
            <Link className="12134" to="/editor">
              글쓰기
            </Link>
            {/* </button> */}
          </div>
        </SerchArea>
        <Body>
          {items.map((item, idx) => (
            <Postthumnails
              onClickDetailHandle={onClickDetailHandle}
              item={item}
              key={idx}
            />
          ))}
        </Body>
        <Footer></Footer>
      </MainPage>
    </div>
  );
}

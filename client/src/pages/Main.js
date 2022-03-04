import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Autocomplete } from "../components/UI_components/Autocomplete";

const MainPage = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  display: flex;
  text-align: center;
  height: 96vh;
  width: auto;
  flex-direction: column;
`;

const Header = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  display: flex;
  flex: 1 0 auto;

  > div {
    border: 1px solid red;
    padding: 10px;

    flex: 1 0 auto;
  }
`;

const SerchArea = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

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

    flex: 1 0 auto;
  }
`;

const Body = styled.div`
  /* border: 1px solid red;
  padding: 10px; */
  display: flex;
  flex: 8 0 auto;
`;

const Footer = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  flex: 0 0 auto;
`;

//----------------------------------------------------------------

const Menu = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  display: flex;
  flex: 4 0 auto;
`;
const Nick = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  flex: 3 0 auto;
`;
const MenuButton = styled.div`
  /* border: 1px solid red;
  padding: 10px; */

  display: flex;
  flex: 1 0 auto;
`;
const MenuButtonInner = styled.button`
  /* border: 1px solid red;
  padding: 10px; */

  margin: 10px;
  margin-top: 0px;

  flex: 1 0 auto;
  height: 40px;
`;

export default function Main({ items }) {
  console.log(items);
  return (
    <MainPage>
      <Header>
        <div className="logo">Flower(로고)</div>
        <Menu>
          <Nick>OOO님 안녕하세요</Nick>
          <MenuButton>
            <MenuButtonInner>마이페이지</MenuButtonInner>
            <MenuButtonInner>로그아웃</MenuButtonInner>
          </MenuButton>
        </Menu>
      </Header>

      <SerchArea>
        <div id="select_bar">
          <Autocomplete></Autocomplete>
        </div>
        <div id="create_post">
          <button>글쓰기</button>
        </div>
      </SerchArea>
      <Body>
        {items.map((item, idx) => (
          <Postthumnails item={item} key={idx} />
        ))}
      </Body>
      <Footer></Footer>
    </MainPage>
  );
}

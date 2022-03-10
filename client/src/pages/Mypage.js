import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Link } from "react-router-dom";
const Mypage = styled.div`
  /* border: 1px solid red; */
  display: flex;
  text-align: center;
  flex-direction: column;

  > #up {
    /* border: 1px solid red; */
    padding: 10px;
    flex: 1 0 auto;
  }
  > #down {
    margin: 0 auto;

    max-width: 1080px;
    max-height: 1980px;
    /* border: 1px solid red; */
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > #boardName {
      display: flex;
      justify-content: space-around;
    }
    > div {
      /* border: 1px solid red; */
      display: flex;
      flex-wrap: wrap;
      margin-left: 9px;

      > .myPost {
        /* border: 1px solid red; */
        padding: 10px;
        flex: 1 0 auto;
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

export default function MyPage({
  userInfo,
  handleDetailPage,
  handleLogout,
  handleMainPage,
  myItem,
}) {
  const userPosts = myItem;
  console.log("1", myItem);

  return (
    <Mypage>
      <Header>
        <Link to="/" className="nav-logo">
          <img src={require("../images/logo.png")} width="220px" alt="logo" />
        </Link>
        <Menu>
          <Nick>
            <span>{userInfo.nickname}</span>님의 마이페이지 입니다.
          </Nick>
          <MenuButton>
            <button onClick={handleMainPage}>메인페이지</button>
            <button onClick={handleLogout}>로그아웃</button>
          </MenuButton>
        </Menu>
      </Header>
      <div id="down">
        <div id="boardName">{userInfo.nickname}님의 뮤직</div>
        {userPosts.length !== 0 ? (
          <div className="myPost">
            {userPosts.map((item, idx) => (
              <Postthumnails
                item={item}
                key={idx}
                handleDetailPage={handleDetailPage}
              />
            ))}
          </div>
        ) : (
          <div className="myPost">작성한 포스트가 존재 하지않습니다.</div>
        )}
      </div>
    </Mypage>
  );
}

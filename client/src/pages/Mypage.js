import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";

const Mypage = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: auto;

  > #up {
    border: 1px solid red;
    padding: 10px;

    flex: 1 0 auto;
  }
  > #down {
    border: 1px solid red;
    padding: 10px;
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > div {
      border: 1px solid red;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;

      > .myPost {
        border: 1px solid red;
        padding: 10px;
        flex: 1 0 auto;
      }
    }
  }
`;

export default function MyPage({ users }) {
  const userPosts = users.myposts;
  if (users.myposts) {
    return (
      <Mypage>
        <div id="up">{users.nickname}님의 마이페이지 입니다! </div>
        <div id="down">
          내가만든 포스트
          <div className="myPost">
            {userPosts.map((item, idx) => (
              <Postthumnails item={item} key={idx} />
            ))}
          </div>
        </div>
      </Mypage>
    );
  }
  return (
    <Mypage>
      <div id="up">{users.nickname}님의 마이페이지 입니다! </div>
      <div id="down">
        내가만든 포스트
        <div className="myPost">작성한 포스트가 존재 하지않습니다.</div>
      </div>
    </Mypage>
  );
}

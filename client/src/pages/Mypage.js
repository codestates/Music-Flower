import React from "react";
import styled from "styled-components";

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

      > .myPost {
        border: 1px solid red;
        padding: 10px;
        flex: 1 0 auto;
      }
    }
  }
`;

export default function MyPage() {
  return (
    <Mypage>
      <div id="up">유저정보</div>
      <div id="down">
        내가만든 포스트
        <div>
          <div className="myPost">1</div>
          <div className="myPost">2</div>
          <div className="myPost">3</div>
        </div>
      </div>
    </Mypage>
  );
}

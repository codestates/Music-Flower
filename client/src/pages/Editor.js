import React from "react";
import styled from "styled-components";
import { MusicSelector } from "../components/UI_components/MusicSelector";

const EditorBody = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: auto;
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
    }
  }
  > #down {
    display: flex;
    flex: 3 0 auto;
    flex-direction: column;
    > #postIntro {
      display: flex;
      flex: 1 0 auto;
      > textarea {
        width: 100vw;
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

export default function Editor() {
  return (
    <div id="editorPage">
      <EditorBody>
        <div id="up">
          <div id="postImg">이미지</div>
          <div id="postInfo">post 정보</div>
        </div>
        <div id="down">
          <div id="postIntro">
            <input></input>
          </div>

          <div id="musicList">
            음악 리스트
            {/* <MusicSelector></MusicSelector> */}
            <div id="music">music</div>
            <div id="music">music</div>
            <div id="music">music</div>
          </div>
        </div>
      </EditorBody>
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const Detailbody = styled.div`
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
      > div {
        margin: 10px;
        background-color: rgba(100, 255, 200, 100);
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
      > textarea {
        width: 100vw;
      }
    }
    > #musicList {
      flex: 4 0 auto;
      > #music {
        border: 1px solid red;
        padding: 10px;
        display: flex;
      }
    }
  }
`;

export default function Detail({ detailData }) {
  console.log("디테일 컴포넌트 정보: ", detailData);
  return (
    <div id="detailPage">
      <Detailbody>
        <div id="up">
          <div id="postImg">
            <img src={detailData.imageUrl} width="200vw" />
          </div>
          <div id="postInfo">
            post 정보
            <div>
              <text>포스트제목 : {detailData.postTitle}</text>
            </div>
            <div>
              <text>유저 닉네임 : {detailData.nickname}</text>
            </div>
            <div>
              <text>
                테그 :
                {detailData.tags.map((e) => {
                  return <span>{e}, </span>;
                })}
              </text>
            </div>
          </div>
        </div>
        <div id="down">
          <div id="postIntro">
            <textarea>{detailData.postExplain}</textarea>
          </div>

          <div id="musicList">
            음악 리스트
            {detailData.musicList.map((e) => {
              return (
                <div id="music">
                  <div>
                    <img src={e.albumImageUrl} alt="1" width="100vw"></img>
                  </div>
                  <div>
                    <div>
                      <text>노래이름 : {e.songName}</text>
                    </div>
                    <div>
                      <text>아티스트 : {e.artist}</text>
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

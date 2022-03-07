import React from "react";
import styled from "styled-components";

const Detailbody = styled.div`
  border: 1px solid red;
  /* padding: 200px; */

  display: flex;
  flex-direction: column;
  height: 900px;
  width: 1200px;

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
    > text {
      margin-left: 9px;
    }
    > #postIntro {
      display: flex;
      flex: 1 0 auto;
      > textarea {
        width: 100vw;
      }
      > div {
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
          <div id="postInfo">
            <div>
              <h1>{detailData.postTitle}</h1>
            </div>
            <div>
              <h4>{detailData.nickname}</h4>
            </div>
            <div>
              {/* <text>
                테그 :
                {detailData.tags.map((e) => {
                  return <span>{e}, </span>;
                })}
              </text> */}
            </div>
          </div>
          <div id="postImg">
            <img src={detailData.imageUrl} width="200vw" />
          </div>
        </div>
        <div id="down">
          <text>소개글</text>
          <div id="postIntro">
            <text>{detailData.postExplain}</text>
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

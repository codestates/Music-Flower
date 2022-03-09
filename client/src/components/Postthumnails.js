import styled from "styled-components";
import React, { useEffect, useState } from "react";
// const Post = styled.div`
//   border: 1px solid red;
//   padding: 10px;

//   display: flex;
//   text-align: center;
//   height: 30vw;
//   width: auto;
//   flex-direction: row;
// `;
const Card = styled.li`
  /* border: 1px solid red; */
  border: 1px solid grey;
  padding: 11px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* border-radius: 20px; */
  height: 374px;
  width: 221px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  > img {
    cursor: pointer;
  }
  > #Card:hover & {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  > h4 {
    > b {
      cursor: pointer;
    }
  }
`;
const Nickname = styled.p`
  color: #333;
  line-height: 22px;
  font-size: 16px;
  text-align: left;
  height: 44px;
  white-space: normal;
  > span {
    color: #a14efc;
  }
`;
const Meta = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;
const Likes = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: 1px;
  width: 14px;
  height: 12px;
  background: url(https://cdnimg.melon.co.kr/resource/image/web/common/bullet_icons_sprite_20201112.png)
    no-repeat -69px -15px;
  vertical-align: top;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  border: 0;
  outline: 0;
`;

const Bar = styled.i`
  color: gray;

  font-size: 15px;
  top: 1px;
  width: 14px;
  height: 12px;
`;

export default function Postthumnails({ item, onClickDetailHandle }) {
  console.log(item);

  const [like, setLike] = useState(item.totalLike);

  const handleLike = (item) => {
    setLike(Number(like) + 1);
  };
  console.log("items", item);
  return (
    // <Post>

    <Card key={item.id}>
      <img
        onClick={() => onClickDetailHandle(item)}
        src={item.image}
        width="200px"
        alt="logo"
      />
      <Container>
        <h4>
          <b onClick={() => onClickDetailHandle(item)}>{item.postTitle}</b>
        </h4>
        <Nickname>
          <span>{item.User.nickname}</span>
        </Nickname>
        <Meta>
          <Likes onClick={() => handleLike(item)} />
          <Bar>\</Bar>
          {item.MusicData.length}곡
        </Meta>
      </Container>
    </Card>
    /* </Post> */
  );
}

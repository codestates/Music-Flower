import React from "react";
import styled from "styled-components";

const Post = styled.ul`
  border: 1px solid red;
  padding: 10px;

  display: flex;
  text-align: center;
  height: 30vw;
  width: auto;
  flex-direction: row;
`;
const Card = styled.li`
  border: 1px solid red;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > #Card:hover & {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  padding: 2px 16px;
`;
const Nickname = styled.p`
  color: grey;
  font-style: italic;
  font-size: large;
  display: flex;
`;
const Meta = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;
const Likes = styled.button`
  border: none;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  font-weight: 800;
  transition: 0.25s;
  background-color: aliceblue;
  color: #1e6b7b;
`;

const Bar = styled.i`
  color: gray;
  font-weight: 2000;
  font-size: 1vw;
  margin-left: 1vw;
  margin-right: 1vw;
`;
const Tagitem = styled.button`
  border: none;
  display: inline-block;
  padding: auto;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
  font-weight: 800;
  transition: 0.25s;
  background-color: aliceblue;
  color: #1e6b7b;
`;
export default function Postthumnails({ item }) {
  console.log(item);
  return (
    <Post key={item.id}>
      <Card>
        <img src={item.imageUrl} width="200vw" />
        <Container>
          <h4>
            <b>{item.postTitle}</b>
          </h4>
          <Nickname>{item.nickname}</Nickname>
          <Meta>
            <Likes>좋아요</Likes>
            <Bar>\</Bar>
            100곡
          </Meta>
          <Meta>
            <Tagitem>{item.tags}</Tagitem>
          </Meta>
        </Container>
      </Card>
    </Post>
  );
}

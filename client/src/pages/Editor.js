import React from "react";
import styled from "styled-components";

const EditorBody = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: auto;
`;

export default function Editor() {
  return (
    <EditorBody>
      <div id="up"></div>
      <div id="down"></div>
    </EditorBody>
  );
}

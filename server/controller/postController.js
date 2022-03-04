//postController.js
const { User } = require("../../models");
//jwt 라이브러리 불러오기
const jwt = require("jsonwebtoken");

module.exports = {
  //get
  //토큰이 있을 경우
  findPost: (req, res) => {
    res.status(200).json("ok");
  },
  //post
  //토큰이 있을 경우

  createPost: (req, res) => {
    res.status(201).json("ok");
  },
  //put
  //토큰이 있을 경우
  //post의  user id = user id 가 일치 할 경우에만 update ,delete
  updatePost: (req, res) => {
    res.status(200).json("ok");
  },
  //delete
  //토큰이 있을 경우
  //post의  user id = user id 가 일치 할 경우에만 update ,delete
  deletePost: (req, res) => {
    res.status(200).json("ok");
  },
};

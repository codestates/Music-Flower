//userController.js
const { User } = require("../models");
//jwt 라이브러리 불러오기
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require("./tokenFunction");

module.exports = {
  logIn: async (req, res) => {
    //console.log("a"); // 왜 안나오죠?
    const { email, password } = req.body;
    const loginInfo = await User.findOne({ where: { email, password } });
    // 해당하는 값
    console.log("lg", loginInfo); // 왜 안나오죠?

    if (!loginInfo) {
      //없다
      res.status(404).json({ message: "Unauthorized" });
    } else {
      delete loginInfo.dataValues.password;
      const token = generateAccessToken(loginInfo.dataValues);
      sendAccessToken(res, token);
      res.status(200).json({ message: "successfully loged in!" }); //"successfully loged in!"\ // result
      //cookie와 토큰을!!! 인증을 담아서 보내준다.
    }
  },

  logOut: (req, res) => {
    if (!res.cookies) {
      res.status(400).json({ message: "Bad request" });
    }
    res.clearCookie("jwt");
    res.status(200).json({ message: "successfully signed out!" });
  },

  // 회원 가입.
  signUp: async (req, res) => {
    //find or Create 쓰기.
    //토큰보내주기
    const { nickname, email, password } = req.body;
    if (!nickname || !email || !password) {
      res.status(422).send("모든 항목을 입력해 주세요");
    }

    const [result, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        nickname,
        password,
      },
    });
    if (!created) {
      res.status(400).send("user is already exists");
    } else {
      const payload = {
        email,
        nickname,
        password,
      };

      const token = generateAccessToken(payload);
      sendAccessToken(res, token);
      res.status(201).json({ message: "successfully signed up" });
    }
  },

  //get userinfo
  //mypage 로 이동 accessToken이 있을 경우에만 data를 보내준다
  //data 에 userinfo 를 넣고 거기에 accessTokenData 넣어서 진행함.
  findUser: (req, res) => {
    const accessTokenData = isAuthorized(req);
    if (!accessTokenData) {
      res.json({ data: null, message: "not authorized" });
    }

    return res.status(200).json({ data: { loginInfo: accessTokenData } });
  },

  //put
  //accessToken 이 있을 경우에만  my page 수정이 가능하다
  //현재 진행중
  //delete
  //accessToken이 있을 경우에만 delete 한다.
};

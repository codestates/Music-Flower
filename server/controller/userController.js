const { User } = require("../models");
const { Post } = require("../models");
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require("./tokenFunction");

module.exports = {
  //[post]/login
  //User DB에서 사용자 정보 찾아서 accessToken을 쿠키(jwt)에 담아서 보내줌
  logIn: async (req, res) => {
    // console.log("서버: ", req.body);
    const { email, password } = req.body;
    const loginInfo = await User.findOne({ where: { email, password } });
    // console.log("서버 loginInfo: ", loginInfo.User);
    if (!loginInfo) {
      // console.log("imfo 에러남");
      return res.status(404).json({ message: "Unauthorized" });
    } else {
      // console.log("유저정보:", loginInfo.dataValues);
      delete loginInfo.dataValues.password;
      const token = generateAccessToken(loginInfo.dataValues);
      // console.log("토큰잘받아옴?");
      sendAccessToken(res, token);
      // return res.status(200).json({ message: "successfully loged in!" });
    }
  },
  //[post]/logout
  //쿠키를 clear(AccessToken지움)한 후 로그아웃
  logOut: (req, res) => {
    if (!res.cookies) {
      res.status(400).json({ message: "Bad request" });
    }
    res.clearCookie("jwt");
    res.status(200).json({ message: "successfully signed out!" });
  },
  //[post]/signup
  //User DB에서 사용자 정보 찾고 없으면 생성해서 accessToken을 쿠키(jwt)에 담아서 보내줌
  signUp: async (req, res) => {
    console.log(req);
    const { nickname, email, password } = req.body;

    if (!nickname || !email || !password) {
      return res.status(422).send("모든 항목을 입력해 주세요");
    }

    const [result, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        nickname,
        password,
      },
    });

    if (!created) {
      return res.status(400).send("user is already exists");
    } else {
      const payload = {
        email,
        nickname,
        password,
      };
      const token = generateAccessToken(payload);
      sendAccessToken(res, token);
    }
  },
  //[get]/userinfo
  //쿠키에 토큰을 가지고 있을 경우(jwt) 사용자 정보를 해독한 값 보내줌
  findUser: (req, res) => {
    const accessTokenData = isAuthorized(req);
    // console.log("accessTokenData :", accessTokenData);
    if (!accessTokenData) {
      res.json({ data: null, message: "not authorized" });
    }
    return res.status(200).json({ data: { loginInfo: accessTokenData } });
  },
};

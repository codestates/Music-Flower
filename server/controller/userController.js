const { User } = require("../models");
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require("./tokenFunction");

module.exports = {
  //[post]/login
  //User DB에서 사용자 정보 찾아서 accessToken을 쿠키(jwt)에 담아서 보내줌
  logIn: async (req, res) => {
    const { email, password } = req.body;
    const loginInfo = await User.findOne({ where: { email, password } });
    if (!loginInfo) {
      return res.status(404).json({ message: "Unauthorized" });
    } else {
      delete loginInfo.dataValues.password;
      const token = generateAccessToken(loginInfo.dataValues);
      sendAccessToken(res, token);
      return res.status(200).json({ message: "successfully loged in!" });
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
  //[get]/userinfo
  //쿠키에 토큰을 가지고 있을 경우(jwt) 사용자 정보를 해독한 값 보내줌
  findUser: (req, res) => {
    const accessTokenData = isAuthorized(req);
    if (!accessTokenData) {
      res.json({ data: null, message: "not authorized" });
    }
    return res.status(200).json({ data: { loginInfo: accessTokenData } });
  },
};

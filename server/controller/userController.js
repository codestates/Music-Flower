const { User } = require("../models");
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require("./tokenFunction");

module.exports = {
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

  logOut: (req, res) => {
    if (!res.cookies) {
      res.status(400).json({ message: "Bad request" });
    }
    res.clearCookie("jwt");
    res.status(200).json({ message: "successfully signed out!" });
  },

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

  findUser: (req, res) => {
    const accessTokenData = isAuthorized(req);
    if (!accessTokenData) {
      res.json({ data: null, message: "not authorized" });
    }
    return res.status(200).json({ data: { loginInfo: accessTokenData } });
  },
};

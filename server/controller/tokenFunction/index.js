const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    // TODO: Access token으로 sign합니다.

    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },

  sendAccessToken: (res, accessToken) => {
    // console.log(loginInfo);
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    // res.cookie("jwt", accessToken, {
    //   domain: "localhost",
    //   path: "/",
    //   secure: true,
    //   maxAge: 24 * 6 * 60 * 10000,
    //   sameSite: "none",
    // });
    return res.status(200).json({ data: null, accessToken, message: "ok" });
  },

  isAuthorized: (req) => {
    // token 말고
    // TODO: JWT 토큰 정보를 받아서 검증합니다.
    const token = req.headers.jwt;
    // console.log("isAuthorized token:", token);
    if (!token) {
      return null;
    }
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};

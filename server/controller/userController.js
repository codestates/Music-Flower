//userController.js
const { User } = require("../models");
//jwt 라이브러리 불러오기
const jwt = require("jsonwebtoken");

/**
const YOUR_SECRET_KEY = process.env.SECRET_KEY

export.createToken = async function (req, res, next) {
    try {
      const user = await User.find(req.body);
      if (user.length) {
      const token = jwt.sign({
      user_id: user[0].user_id
      }, YOUR_SECRET_KEY, {
      expiresIn: '1h'
      });

      res.cookie('user', token);
      res.status(201).json({
      result: 'ok',
      token
      });
        } else {
      res.status(400).json({ error: 'invalid user' });
      }
      } catch (err) {
      console.error(err);
      next(err);
      }
  };


  exports.createNewUser = async function (req, res, next) {
      try {
      const user = await new User(req.body).save();
        res.status(201).json({
        result: 'ok',
      user: user
        });
      } catch (err) {
      console.error(err);
      next(err);
      }
  };
 */

module.exports = {
  logIn: async (req, res) => {
    const { email, password } = req.body;
    //일치하는 값   email, password
    console.log(req.body);
    const user = await User.findOne({ where: { email, password } });
    // 해당하는 값
    if (!user) {
      //없다
      res.status(404).json({ message: "Unauthorized" });
    } else {
      //아닌경우
      // if (err) {
      //   res.status(500).send({ message: "Internal Server Error" });
      // } else {
      res.status(200).json({ message: "successfully loged in!" }); //"successfully loged in!"\ // result
      //cookie와 토큰을!!! 인증을 담아서 보내준다.
    }
  },

  logOut: (req, res) => {
    //쿠키안에 jwt 를 담아서 주는데, 쿠키(안에 토큰을) 삭제
    //res.clearCookie("jwt"); //(null) // set("AccessToken");
    res.cookies("jwt", null, {
      maxAge: 0,
    });
    if (!res.cookies) {
      res.status(400).json({ message: "Bad request" });
    }
    res.status(200).json({ message: "successfully signed out!" });
  },
  //500케이스는 잘 모르겟습니다

  signUp: async (req, res) => {
    //find or Create 쓰기.
    //토큰보내주기
    const { nickname, email, password } = req.body;
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
      const token = payload;
      res, token;

      res.status(200).json({ message: "successfully signed up" });
    }

    res.status(200).json("ok");
  },

  //get
  //mypage 로 이동 accessToken이 있을 경우에만 data를 보내준다
  findUser: (req, res) => {
    res.status(200).json("ok");
  },
  //put
  //accessToken 이 있을 경우에만 수정이 가능하다.
  updateUser: (req, res) => {
    res.status(200).json("ok");
  },
  //delete
  //accessToken이 있을 경우에만 delete 한다.
  deleteUser: (req, res) => {
    res.status(200).json("ok");
  },
};

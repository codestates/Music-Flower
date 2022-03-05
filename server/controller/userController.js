//userController.js
const { User } = require("../models");
//jwt 라이브러리 불러오기
const jwt = require("jsonwebtoken");

//AccessToken, GenerateToken
//require("dotenv").config();

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
      next(err);g
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
      //아닌경우;
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "successfully loged in!" }); //"successfully loged in!"\ // result
        //cookie와 토큰을!!! 인증을 담아서 보내준다.
      }
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
      res.status(200).json({ message: "successfully signed up" });
    }
  },

  //get
  //mypage 로 이동 accessToken이 있을 경우에만 data를 보내준다
  //data를 cookie에 넣어야 하는지 accesstoken에 넣어야할까요?
  //data 에 userinfo 를 넣고 거기에 accessTokenData 넣어서 진행함.
  findUser: (req, res) => {
    const cookie = req.cookies.jwt; //event: req cookies 찾아보기
    if (!cookie) {
      res.json({ data: null, message: "not authorized" });
    }

    const accessTokenData = isAuthorized(cookie);

    if (!accessTokenData || !cookie) {
      res.json({ data: null, message: "not authorized" });
    }

    return res.status(200).json({ data: { userInfo: accessTokenData } });
  },

  //put
  //accessToken 이 있을 경우에만  my page 수정이 가능하다
  //현재 진행중
  updateUser: (req, res) => {
    res.status(200).json("ok");
  },
  //delete
  //accessToken이 있을 경우에만 delete 한다.
  deleteUser: (req, res) => {
    res.status(200).send("Good bye ");
  },
};

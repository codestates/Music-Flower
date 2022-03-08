import axios from "axios";
import React from "react";
import "../css/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import spotifyAuth from "../auth/useSpotifyAuth";

//const code = new URLSearchParams(window.location.search).get("code");

export default function Login({ handleResponseSuccess, isLogin, setMeetCode }) {
  // const accessToken = spotifyAuth(code);
  // setMeetCode(accessToken);
  // console.log("accessToken", accessToken);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  // console.log("현재 로그인 정보:", isLogin);

  const handleGuest = () => {
    setLoginInfo(
      {
        email: "test@naver.com",
        password: "password",
      },
      handleResponseSuccess()
    );
  };

  const handleLogin = () => {
    if (!loginInfo.email && !loginInfo.password) {
      return alert("아이디와 비밀번호 모두 입력 하세요.");
    }

    const url = "http://localhost:8080/login";
    axios
      .post(
        url,
        {
          email: loginInfo.email,
          password: loginInfo.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("해당 유저 있음:", res.statusText);
        // handleResponseSuccess();
      })
      .catch((err) => alert("아이디 또는 비밀번호가 일치 하지않습니다."));
  };

  return (
    <div>
      <header>
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <Link to="/" className="nav-logo">
                <img
                  src={require("../images/logo.png")}
                  width="220px"
                  alt="logo"
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="LoginForm">
        <div className="LoginWrapper">
          <img
            className="Login-logo"
            src={require("../images/logo.png")}
            alt="logo"
            width="300px"
          />
          <form className="Loginfrm" onSubmit={(e) => e.preventDefault()}>
            <label className="labelTitle">이메일</label>
            <input
              className="email"
              type="email"
              onChange={handleInputValue("email")}
            />
            <div className="passwordfield">
              <label className="labelTitle">비밀번호</label>
              <input
                className="password"
                type="password"
                onChange={handleInputValue("password")}
              />
            </div>
            <button className="Login-btn" onClick={handleLogin}>
              Login !
            </button>
            <button className="Login-btn" onClick={handleGuest}>
              Guest !
            </button>
          </form>
          <div className="option">
            <p>
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

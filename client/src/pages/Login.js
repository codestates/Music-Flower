import axios from "axios";
import React from "react";
import "../css/Login.css";
import { useState } from "react";

export default function Login({ handleResponseSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  console.log(loginInfo);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!loginInfo.email && !loginInfo.password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
      return;
    }
    // } else if (
    //   loginInfo.email !== userDatas.email &&
    //   loginInfo.password !== userDatas.password
    // ) {
    //   setErrorMessage("아이디 또는 비밀번호 가 다릅니다");
    //   return alert(errorMessage);
    // }
    const url = "http://localhost:8080/user/login";
    axios
      .post(
        url,
        { email: loginInfo.email, password: loginInfo.password }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   // withCredentials: true,
        // }
      )
      .then((res) => {
        if (res.payload.message === "successfully loged in!") {
          handleResponseSuccess();
        }
      })
      .catch((err) => err);
  };

  return (
    <div>
      <header>
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <a href="/" className="nav-logo">
                <img src={require("../images/logos.png")} />
              </a>
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
          <form className="Loginfrm">
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
          </form>
          <div className="option">
            <p>
              계정이 없으신가요? <a href="/signup"> 회원가입</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

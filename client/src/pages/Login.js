import React from "react";
import "../css/Login.css";

export default function Signup() {
  return (
    <div>
      <header>
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <a href="/">
                <h1 className="nav-logo">Music Flower</h1>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="LoginForm">
        <div className="LoginWrapper">
          <img
            className="Login-logo"
            src={require("../images/face.png")}
            alt="logo"
            width="300px"
          />
          <form className="Loginfrm">
            <label className="labelTitle">이메일</label>
            <input className="email" type="email" />
            <div className="passwordfield">
              <label className="labelTitle">비밀번호</label>
              <input className="password" type="password" />
            </div>
            <button className="Login-btn">Login !</button>
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

import React from "react";
import "../css/Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <header>
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <Link to="/land" className="nav-logo">
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
      <div className="SignupForm">
        <div className="SignupWrapper">
          <img
            className="Signup-logo"
            src={require("../images/logo.png")}
            alt="logo"
            width="300px"
          />
          <form className="SignUpfrm" onSubmit={(e) => e.preventDefault()}>
            <label className="labelTitle">이메일</label>
            <input className="email" type="email" />
            <label className="labelTitle">닉네임</label>
            <input className="nickname" />
            <div className="passwordfield">
              <label className="labelTitle">비밀번호</label>
              <input className="password" type="password" />
            </div>
            <div className="passwordfield">
              <label className="labelTitle">비밀번호 확인</label>
              <input className="password-confirm" type="password" />
            </div>
            <button className="Signup-btn">Sign Up!</button>
          </form>
          <div className="option">
            <p>
              이미 계정이 있으신가요?<Link to="/login">로그인</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "../css/Signup.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Signup({ serverURL }) {
  const history = useHistory();
  const [signup, setSignup] = useState({
    nickname: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const handleInputValue = (key) => (e) => {
    setSignup({ ...signup, [key]: e.target.value });
  };

  console.log("login", signup);
  const handleSignup = () => {
    if (signup.password !== signup.checkPassword) {
      return alert("비밀번호가 다릅니다");
    } else {
      axios
        .post(`${serverURL}/signup`, {
          nickname: signup.nickname,
          email: signup.email,
          password: signup.password,
        })
        .then((res) => history.push("/login"))
        .catch((err) => alert("이미 존재하는 아이디 입니다."));
    }
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
            <input
              className="email"
              type="email"
              onChange={handleInputValue("email")}
            />
            <label
              className="labelTitle"
              onChange={handleInputValue("nickname")}
            >
              닉네임
            </label>
            <input
              className="nickname"
              onChange={handleInputValue("nickname")}
            />
            <div className="passwordfield">
              <label
                className="labelTitle"
                onChange={handleInputValue("password")}
              >
                비밀번호
              </label>
              <input
                className="password"
                type="password"
                onChange={handleInputValue("password")}
              />
            </div>
            <div className="passwordfield">
              <label className="labelTitle">비밀번호 확인</label>
              <input
                className="password-confirm"
                type="password"
                onChange={handleInputValue("checkPassword")}
              />
            </div>
            <button className="Signup-btn" onClick={handleSignup}>
              Sign Up!
            </button>
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

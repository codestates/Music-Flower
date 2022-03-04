import React from "react";
import "../css/Landing.css";
function handlePlay() {}

export default function Landing({ item }) {
  return (
    <div className="landing-body">
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
      <div className="Landing-main">
        <div className="line">좋아하는 음악을 다른 사람들과 서로 공유하며</div>
        <div className="line">새로운 추억을 쌓아 보세요!</div>
        <div className="btn">
          <a className="play-btn" href="/login">
            Start
          </a>
        </div>
        <div>
          <a href="/signup" className="signup">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
}

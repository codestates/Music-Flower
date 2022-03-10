import React from "react";
import "../css/Landing.css";
import { useHistory, Link } from "react-router-dom";

export default function Landing({ userInfo }) {
  const history = useHistory();
  const handleRecord = () => {
    if (userInfo === null) {
      history.push("/login");
    } else {
      history.push("/main");
    }
  };

  return (
    <div className="landing-body">
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
      <div className="Landing-main">
        <div className="line">좋아하는 음악을 다른 사람들과 서로 공유하며</div>
        <div className="line">새로운 추억을 쌓아 보세요!</div>
        <div className="btn">
          <button className="play-btn" onClick={handleRecord}>
            Start
          </button>
        </div>
        <div>
          <Link to="/signup" className="signup">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

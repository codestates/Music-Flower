// import SpotifyAPP from "./components/SpotifyApp";
// import { allPosts } from "./pages/dummy/dummyitems";
// import { dummyuser } from "./pages/dummy/dummyUser";
import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Editor from "./pages/Editor";

function App() {
  // const [meetCode, setMeetCode] = useState(null);

  const [isLogin, setIsLogin] = useState(false); // 로그인 했는지 확인
  const [userinfo, setUserinfo] = useState(null); // 유저 정보 있는지 확인
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [myItem, setMypageItem] = useState([]);

  const isAuthenticated = (token) => {
    axios
      .get("http://localhost:8080/userinfo", { headers: { jwt: token } })
      .then((res) => {
        console.log("데이터", res);
        setUserinfo(res.data.data.loginInfo);
        setIsLogin(!isLogin);
        history.push("/main");
        loadMainPage();
      });
  };
  // console.log(userinfo);
  const handleMainPage = () => {
    history.push("/main");
  };
  const handleResponseSuccess = () => {
    console.log("cookie", document.cookie);
    const jwt = document.cookie.split("jwt=")[1];
    console.log(jwt);
    isAuthenticated(jwt);
  };

  const handleLogout = () => {
    userLogout();
  };
  const userLogout = () => {
    setUserinfo(null);
    setIsLogin(false);
    document.cookie = "jwt" + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
    history.push("/");
  };
  const onClickDetailHandle = (postData) => {
    // 클릭하면 디테일데이터가 들어가야지 ㅇㅇ
    console.log("postData:", postData);
    setDetailData(postData);
    history.push("/detail");
  };
  const loadMainPage = () => {
    axios
      .get("http://localhost:8080/post")
      .then((res) => setItems(res.data.data));
  };
  const loadMypage = () => {
    if (items.length === 0) {
      return;
    } else {
      const mypageItem = items.filter((item) => item.userId === userinfo.id);
      setMypageItem(mypageItem);
      console.log(myItem);
    }
  };
  return (
    <Switch>
      <Route exact path="/">
        <Landing isLogin={isLogin} />
      </Route>
      <Route path="/login">
        <Login handleResponseSuccess={handleResponseSuccess} />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/main">
        <Main
          items={items}
          users={userinfo}
          loadMypage={loadMypage}
          setDetailData={setDetailData}
          handleLogout={handleLogout}
          onClickDetailHandle={onClickDetailHandle}
        ></Main>
      </Route>
      <Route path="/mypage">
        <Mypage
          users={userinfo}
          myItem={myItem}
          onClickDetailHandle={onClickDetailHandle}
          handleLogout={handleLogout}
          handleMainPage={handleMainPage}
        ></Mypage>
      </Route>
      <Route path="/detail">
        <Detail
          users={userinfo}
          detailData={detailData}
          handleMainPage={handleMainPage}
          handleLogout={handleLogout}
        ></Detail>
      </Route>
      <Route path="/editor">
        <Editor
          users={userinfo}
          handleMainPage={handleMainPage}
          handleLogout={handleLogout}
        ></Editor>
      </Route>
    </Switch>
  );
}

export default App;

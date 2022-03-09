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
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [myItem, setMypageItem] = useState([]);
  const [musicdata, setMusicData] = useState([]);

  const isAuthenticated = (token) => {
    axios
      .get("http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com/userinfo", {
        headers: { jwt: token },
      })
      .then((res) => {
        setUserinfo(res.data.data.loginInfo);
        // setIsLogin(!isLogin);
        handleMainPage();
      });
  };
  const handleMainPage = () => {
    axios
      .get("http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com/post")
      .then((res) => setItems(res.data.data));
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
    // setIsLogin(false);
    document.cookie = "jwt" + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
    history.push("/");
  };
  const onClickDetailHandle = (postData) => {
    // 클릭하면 디테일데이터가 들어가야지 ㅇㅇ
    // console.log("postData:", postData);
    setDetailData(postData);
    history.push("/detail");
  };

  const loadMypage = () => {
    setTimeout(() => load(), 300);
  };
  const load = () => {
    axios
      .get(
        `http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com/post/${userinfo.id}`
      )
      .then((res) => setMypageItem(res.data.data));
    history.push("/mypage");
  };

  const handleMusicData = () => {
    axios
      .get("http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com/musiclist")
      .then((res) => setMusicData(res.data.data));
    history.push("/editor");
  };
  console.log(musicdata);
  return (
    <Switch>
      <Route exact path="/">
        <Landing userinfo={userinfo} />
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
          handleMusicData={handleMusicData}
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
          musicdata={musicdata}
          handleMainPage={handleMainPage}
          loadMypage={loadMypage}
          handleLogout={handleLogout}
        ></Editor>
      </Route>
    </Switch>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Editor from "./pages/Editor";

// import SpotifyAPP from "./components/SpotifyApp";

import { allPosts } from "./pages/dummy/dummyitems";
import { dummyuser } from "./pages/dummy/dummyUser";
function App() {
  const [meetCode, setMeetCode] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();

  // axios.get("https://localhost:4000/auth").then((res) => {
  //   console.log(res.data.data.userInfo);
  //   setUserinfo(res.data.data.userInfo);
  //   setIsLogin(!isLogin);
  //   history.push("/mypage");
  // });

  const handleResponseSuccess = () => {
    setIsLogin(!isLogin);
    setUserinfo(dummyuser);
    history.push("/main");
  };
  const [items, setItems] = useState(allPosts);
  const [detailData, setDetailData] = useState({});

  const handleLogout = () => {
    setUserinfo(null);
    setIsLogin(false);
    history.push("/");
  };
  const onClickDetailHandle = (postData) => {
    // 클릭하면 디테일데이터가 들어가야지 ㅇㅇ
    console.log("postData:", postData);
    setDetailData(postData);
    history.push("/detail");
  };
  return (
    <Switch>
      <Route exact path="/">
        <Landing isLogin={isLogin} setMeetCode={setMeetCode} />
      </Route>
      <Route path="/login">
        <Login
          handleResponseSuccess={handleResponseSuccess}
          setMeetCode={setMeetCode}
        />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/main">
        <Main
          items={items}
          users={userinfo}
          setDetailData={setDetailData}
          handleLogout={handleLogout}
          onClickDetailHandle={onClickDetailHandle}
        ></Main>
      </Route>
      <Route path="/mypage">
        <Mypage
          users={userinfo}
          onClickDetailHandle={onClickDetailHandle}
        ></Mypage>
      </Route>
      <Route path="/detail">
        <Detail users={userinfo} detailData={detailData}></Detail>
      </Route>
      <Route path="/editor">
        <Editor users={userinfo}></Editor>
      </Route>
    </Switch>
  );
}

export default App;

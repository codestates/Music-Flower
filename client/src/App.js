import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Editor from "./pages/Editor";

import Postthumnails from "./components/Postthumnails";
import { allPosts } from "./components/dummy/dummyitems";
import { dummyuser } from "./components/dummy/dummyUser";
function App() {
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

  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login
          isLogin={isLogin}
          userDatas={dummyuser}
          handleResponseSuccess={handleResponseSuccess}
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
        ></Main>
      </Route>
      <Route path="/mypage">
        <Mypage users={userinfo}></Mypage>
      </Route>
      <Route path="/detail">
        <Detail users={userinfo} detailData={detailData}></Detail>
      </Route>
      <Route path="/editor">
        <Editor users={userinfo}></Editor>
      </Route>
    </Switch>
    // <Main items={items} setItems={setItems}></Main>
  );
}

export default App;

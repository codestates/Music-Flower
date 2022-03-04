import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SpotifyAPP from "./components/SpotifyApp";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import { initialitems } from "./components/dummy/dummyitems";
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
  const [items, setItems] = useState(initialitems);

  return (
    <Switch>
      <Route exact path="/">
        <SpotifyAPP />
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
        <Main items={items} users={userinfo}></Main>
      </Route>
      <Route path="/mypage">
        <Mypage users={userinfo}></Mypage>
      </Route>
    </Switch>
  );
}

export default App;

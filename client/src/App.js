import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import SpotifyAPP from "./components/SpotifyApp";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Editor from "./pages/Editor";
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
    console.log("??????");
  };
  console.log("로그인후", isLogin);
  const [items, setItems] = useState(initialitems);

  // useEffect(() => {
  //   console.log("이미지 useEffect");
  //   const [items, setItems] = useState(initialitems);
  // }, [items, playlist]);

  const handleLogout = () => {
    setUserinfo(null);
    setIsLogin(false);
    history.push("/");
  };

  return (
    <Switch>
      <Route exact path="/">
        <SpotifyAPP />
        <Landing isLogin={isLogin} />
      </Route>
      <Route path="/login">
        <Login
          isLogin={isLogin}
          handleResponseSuccess={handleResponseSuccess}
        />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/main">
        <Main items={items} users={userinfo} handleLogout={handleLogout}></Main>
      </Route>
      <Route path="/mypage">
        <Mypage users={userinfo}></Mypage>
      </Route>
      <Route path="/editor">
        <Editor users={userinfo}></Editor>
      </Route>
      <Route path="/">
        {isLogin ? <Redirect to="/main" /> : <Redirect to="/login" />}
      </Route>
    </Switch>
    // <Main items={items} setItems={setItems}></Main>
  );
}

export default App;

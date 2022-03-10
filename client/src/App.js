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
  const history = useHistory();
  const [userInfo, setUserinfo] = useState(null);
  const [items, setItems] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [myItem, setMypageItem] = useState([]);
  const [musicdata, setMusicData] = useState([]);
  const [isRemake, setIsRemake] = useState(false);

  // editor state
  const [postImage, setPostPoto] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postExplain, setPostintro] = useState("");
  const [musicList, setMusicList] = useState([]);

  let serverURL = "http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com";
  // let serverURL = "http://localhost:8080";

  const isAuthenticated = (token) => {
    axios
      .get(`${serverURL}/userInfo`, {
        headers: { jwt: token },
      })
      .then((res) => {
        console.log(res);
        setUserinfo(res.data.data.loginInfo);
        handleMainPage();
      });
  };
  const handleMainPage = () => {
    axios.get(`${serverURL}/post`).then((res) => setItems(res.data.data));
    setTimeout(
      () =>
        (() => {
          history.push("/main");
        })(),
      300
    );
  };
  const handleResponseSuccess = (res) => {
    const jwt = res.data.accessToken;

    isAuthenticated(jwt);
  };

  const handleLogout = () => {
    userLogout();
  };
  const userLogout = () => {
    setUserinfo(null);
    history.push("/");
  };
  const handleDetailPage = (postData) => {
    // 클릭하면 디테일데이터가 들어가야지 ㅇㅇ
    setDetailData(postData);
    history.push("/detail");
  };

  const handleMypage = () => {
    axios
      .get(`${serverURL}/post/${userInfo.id}`)
      .then((res) => setMypageItem(res.data.data));
    setTimeout(
      () =>
        (() => {
          history.push("/mypage");
        })(),
      600
    );
  };

  const handleMusicData = () => {
    axios
      .get(`${serverURL}/musiclist`)
      .then((res) => setMusicData(res.data.data));
    history.push("/editor");
  };

  return (
    <Switch>
      <Route exact path="/">
        <Landing userInfo={userInfo} />
      </Route>
      <Route path="/login">
        <Login
          handleResponseSuccess={handleResponseSuccess}
          serverURL={serverURL}
        />
      </Route>
      <Route path="/signup">
        <Signup serverURL={serverURL} />
      </Route>
      <Route path="/main">
        <Main
          items={items}
          userInfo={userInfo}
          handleMypage={handleMypage}
          handleLogout={handleLogout}
          handleDetailPage={handleDetailPage}
          handleMusicData={handleMusicData}
          setDetailData={setDetailData}
          setIsRemake={setIsRemake}
          setPostPoto={setPostPoto}
          setPostTitle={setPostTitle}
          setPostintro={setPostintro}
          setMusicList={setMusicList}
        ></Main>
      </Route>
      <Route path="/mypage">
        <Mypage
          userInfo={userInfo}
          myItem={myItem}
          handleDetailPage={handleDetailPage}
          handleLogout={handleLogout}
          handleMainPage={handleMainPage}
        ></Mypage>
      </Route>
      <Route path="/detail">
        <Detail
          userInfo={userInfo}
          detailData={detailData}
          serverURL={serverURL}
          handleMainPage={handleMainPage}
          handleLogout={handleLogout}
          handleMusicData={handleMusicData}
          setIsRemake={setIsRemake}
          setPostPoto={setPostPoto}
          setPostTitle={setPostTitle}
          setPostintro={setPostintro}
          setMusicList={setMusicList}
        ></Detail>
      </Route>
      <Route path="/editor">
        <Editor
          userInfo={userInfo}
          musicdata={musicdata}
          detailData={detailData}
          isRemake={isRemake}
          postImage={postImage}
          postTitle={postTitle}
          postExplain={postExplain}
          musicList={musicList}
          serverURL={serverURL}
          handleMainPage={handleMainPage}
          handleMypage={handleMypage}
          handleLogout={handleLogout}
          setMusicList={setMusicList}
          setPostintro={setPostintro}
          setPostTitle={setPostTitle}
          setPostPoto={setPostPoto}
        ></Editor>
      </Route>
    </Switch>
  );
}

export default App;

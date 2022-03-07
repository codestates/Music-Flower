import { useState, useEffect } from "react";
import axios from "axios";

export default function useSpotifyAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setReFreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // spotify accessToken얻기
  useEffect(() => {
    axios
      .post("http://localhost:8080/spotify/auth", {
        code,
      })
      .then((res) => {
        console.log("res.data : ", res.data);
        setAccessToken(res.data.accessToken);
        setReFreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // 링크 지우기
        window.history.pushState({}, null, "/editor");
      });
  }, [code]);

  // spotify refreshToken 얻기
  useEffect(() => {
    axios
      .post("http://localhost:8080/spotify/refresh", {
        refreshToken,
      })
      .then((res) => {
        console.log("refreshToken");
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
      });
  }, [refreshToken, expiresIn]);

  return accessToken;
}

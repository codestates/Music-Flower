const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// post 순서 상관있나?
app.post("/spotify/auth", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: "26044bd61ea049d4a54e2798864d988b",
    clientSecret: "4a31784160154cc8bbb9aaa60f52515e",
    redirectUri: "http://localhost:3000",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.status(400);
    });
});

app.post("/spotify/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    clientId: "26044bd61ea049d4a54e2798864d988b",
    clientSecret: "4a31784160154cc8bbb9aaa60f52515e",
    redirectUri: "http://localhost:3000",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log("refresh data: " + data);
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch(() => {
      res.status(400);
    });
});

app.listen(8080);

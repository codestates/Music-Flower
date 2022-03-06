const SpotifyWebApi = require("spotify-web-api-node");

const cId = "26044bd61ea049d4a54e2798864d988b";
const cSecret = "b0143d3ebc5949b5b353a78dfaf4ba97";

module.exports = {
  getAuth: (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      clientId: cId,
      clientSecret: cSecret,
      redirectUri: "http://localhost:3000/login",
    });
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        console.log("data", data);
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch(() => {
        res.status(400);
      });
  },
  getRefreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      clientId: cId,
      clientSecret: cSecret,
      redirectUri: "http://localhost:3000/login",
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
  },
};

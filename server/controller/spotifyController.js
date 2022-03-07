const SpotifyWebApi = require("spotify-web-api-node");

module.exports = {
  getAuth: (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      clientId: "91b9b462242b430aa59363c6adeda3fc",
      clientSecret: "5e09bcd040bf4a46afac0eb381056fb3",
      redirectUri: "http://localhost:3000/editor",
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
  },
  getRefreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    console.log(refreshToken);
    const spotifyApi = new SpotifyWebApi({
      clientId: "91b9b462242b430aa59363c6adeda3fc",
      clientSecret: "5e09bcd040bf4a46afac0eb381056fb3",
      redirectUri: "http://localhost:3000/editor",
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

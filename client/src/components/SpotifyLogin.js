// import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=26044bd61ea049d4a54e2798864d988b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function SpotifyLogin() {
  return (
    <div className="12">
      <a className="12134" href={AUTH_URL}>
        spotify_access_token 얻는 butten!
      </a>
    </div>
  );
}

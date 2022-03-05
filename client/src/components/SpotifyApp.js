import SpotifyLogin from "./SpotifyLogin";
import SpotifyDashboard from "./SpotifyDashboard";

const code = new URLSearchParams(window.location.search).get("code");
function spotifyAPP() {
  console.log("code", code);
  return <SpotifyDashboard code={code} />;
}

export default spotifyAPP;

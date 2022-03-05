const { getAuth, getRefreshToken } = require("../controller/spotifyController");
const express = require("express");
const router = express.Router();

router.post("/auth", getAuth);
router.post("/refresh", getRefreshToken);

module.exports = router;

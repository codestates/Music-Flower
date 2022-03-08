const { findMusic } = require("./musicListController")
const express = require("express");
const router = express.Router();

router.get("/", findMusic);

module.exports = router;
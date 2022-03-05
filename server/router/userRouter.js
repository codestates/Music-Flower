const {
  logIn,
  logOut,
  signUp,
  findUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const express = require("express");
const router = express.Router();
const authJwt = require("../auth");

router.post("/login", authJwt, logIn);
router.post("/logout", authJwt, logOut);
router.post("/signup", authJwt, signUp);

router.get("/:id", authJwt, findUser);
router.put("/:id", authJwt, updateUser);
router.delete("/:id", authJwt, deleteUser);

module.exports = router;

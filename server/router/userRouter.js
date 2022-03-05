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

router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/signup", signUp);

router.get("/:id", findUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

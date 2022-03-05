const authJwt = require("../auth");
const {
  findPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");
const express = require("express");
const router = express.Router();

router.get("/", authJwt, findPost);
router.post("/:id", authJwt, createPost);
router.put("/:id", authJwt, updatePost);
router.delete("/:id", authJwt, deletePost);

module.exports = router;

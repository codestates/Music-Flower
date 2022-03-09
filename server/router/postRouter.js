const {
  findPost,
  findUserPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");
const express = require("express");
const router = express.Router();

router.get("/", findPost);
router.get("/:id", findUserPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;

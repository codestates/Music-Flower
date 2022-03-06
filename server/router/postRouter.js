const {
  findPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");
const express = require("express");
const router = express.Router();

router.get("/", findPost);
router.post("/:id", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;

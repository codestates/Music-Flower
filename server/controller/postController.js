//postController.js
const { User } = require("../models");
const { Post } = require("../models");

module.exports = {
  findPost: async (req, res) => {
    const postList = await Post.findAll({
      attributes:{
      exclude: ['tatalLike', 'totalComment'],
      include: [
        {
          model: User,
          attributes: 'nickname'
        }
      ]
    }
    });
    res.status(200).json({data: postList, message: 'ok'});
  },

  createPost: async (req, res) => {
    const {userId, postTitle, image, postExplain, createdAt} = req.body;
    const createdPost = await Post.create({
      userId: userId,
      postTitle: postTitle,
      image: image,
      postExplain: postExplain,
      createdAt: createdAt
    })
    res.status(201).json("successfully created your post");
  },

  updatePost: async (req, res) => {
    const postId = req.params.id;
    const {postTitle, image, postExplain} = req.body;
    await User.update({postTitle, image, postExplain},{
      where: {
        postId: postId
      }
    });
    res.status(200).json("successfully updated your post");
  },

  deletePost: async (req, res) => {
    const postId = req.params.id;
    await Post.destroy({
      where: {
        id: postId
      }
    });
    res.status(200).json("successfully deleted your post");
  },
};

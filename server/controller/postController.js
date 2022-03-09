//postController.js
const { User } = require("../models");
const { Post } = require("../models");
const { MusicData } = require("../models");
const db = require("../models");
const Post_MusicData = db.sequelize.models.Post_MusicData;

module.exports = {
  // [get]/post
  findPost: async (req, res) => {
    const postList = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["nickname"],
        },
        {
          model: MusicData,
        },
      ],
    });
    res.status(200).json({ data: postList, message: "ok" });
  },
  // [get]/post:id(userId)
  findUserPost: async (req, res) => {
    const userId = req.params.id;
    const userPostList = await Post.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: User,
          attributes: ["nickname"],
        },
        {
          model: MusicData,
        },
      ],
    });
    res.status(200).json({ data: userPostList, message: "ok" });
  },

  // [post]/post
  createPost: (req, res) => {
    const { userId, postTitle, image, postExplain, musicList } = req.body;
    Post.create({
      userId: userId,
      postTitle: postTitle,
      image: image,
      postExplain: postExplain,
    }).then((result) => {
      const bulkList = musicList.map((el) => {
        return {
          PostId: result.id,
          MusicDatumId: el,
        };
      });
      Post_MusicData.bulkCreate(bulkList);
    });
    res.status(201).json("successfully created your post");
  },
  // [put]/post/:id(postId)
  updatePost: (req, res) => {
    const postId = req.params.id;
    const { postTitle, image, postExplain, musicList } = req.body;
    Post.update(
      {
        postTitle: postTitle,
      },
      {
        where: {
          id: postId,
        },
      }
    )
      .then(() => {
        Post.update(
          {
            image: image,
          },
          {
            where: {
              id: postId,
            },
          }
        );
      })
      .then(() => {
        Post.update(
          {
            postExplain: postExplain,
          },
          {
            where: {
              id: postId,
            },
          }
        );
      })
      .then(() => {
        Post_MusicData.destroy({
          where: {
            PostId: postId,
          },
        });
      })
      .then(() => {
        const bulkList = musicList.map((el) => {
          return {
            PostId: postId,
            MusicDatumId: el,
          };
        });
        Post_MusicData.bulkCreate(bulkList);
      });
    res.status(200).json("successfully updated your post");
  },

  //[delete]/:id(postId)
  deletePost: (req, res) => {
    const postId = req.params.id;
    Post.destroy({
      where: {
        id: postId,
      },
    }).then(() => {
      Post_MusicData.destroy({
        where: {
          postId: postId,
        },
      });
    });
    res.status(200).json("successfully deleted your post");
  },
};

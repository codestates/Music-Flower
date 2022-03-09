//postController.js
const { User } = require("../models");
const { Post } = require("../models");
const { MusicData } = require("../models");
const db = require("../models");
const Post_MusicData = db.sequelize.models.Post_MusicData;

module.exports = {
  //[get] 포스트 불러오기
  //포스트와 연결된 userId의 nickname과
  //포스트와 연결된(Post-Post_MusicData-MusicData) MusicData의 정보도 가지고 옴
  findPost: async (req, res) => {
    // console.log("findPost req",req);
    // const postList = await Post.findAll({
    //   attributes: ["userId", "postTitle", "image", "postExplain", "createdAt"],
    // });
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

  findUserPost: async (req, res) => {
    const userId = req.params.id;
    const userPostList = await Post.findAll(
      {
        where: {
          userId: userId,
        },
        include: [
          {
            model: MusicData,
          }
        ]
      }
    );
    res.status(200).json({data: userPostList, message: "ok"});
  },

  //[post] post생성하기
  //Post에 레코드 생성
  //Post_musicData에 PostId에 해당하는 MusicDatumId를 새롭게 생성
  createPost: (req, res) => {
    const { userId, postTitle, image, postExplain, musicList } = req.body;
    Post.create({
      userId: userId,
      postTitle: postTitle,
      image: image,
      postExplain: postExplain,
    }).then((result) => {
      //musicList에는 배열로 MusicData의 id가 들어오도록 함
      const bulkList = musicList.map((el) => {
        return {
          PostId: result.id,
          MusicDatumId: el,
        };
      });
      Post_MusicData.bulkCreate(bulkList);
    });

    // queryInterface.bulkInsert("Post_MusicData", bulkList);

    res.status(201).json("successfully created your post");
  },
  //[put]/:id 는 postId로 요청할 것
  //post 수정
  //db에 있는 해당 포스트 id 내용 수정 후
  //post_musicData에 있는 PostId 에 해당하는 데이터 삭제
  //post_musicData에 PostId에 해당하는 MusicDatumId를 새롭게 생성
  updatePost: (req, res) => {
    const postId = req.params.id;
    const { postTitle, image, postExplain, musicList } = req.body;
    Post.update(
      { postTitle, image, postExplain },
      {
        where: {
          postId: postId,
        },
      }
    )
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
        Post_MusicData.bulkcreate(bulkList);
      });
    res.status(200).json("successfully updated your post");
  },

  //[delete]/:id 는 postId로 요청할 것
  //post 삭제
  //db에 있는 해당 포스트 id 삭제 후
  //Post_MusicData에 있는 PostId 에 해당하는 데이터 삭제
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

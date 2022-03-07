//postController.js
const { User } = require("../models");
const { Post } = require("../models");
const { MusicData } = require("../models");
const { Post_MusicData } = require("../models");

module.exports = {
  //[get] 포스트 불러오기
  //포스트와 연결된 userId의 nickname과
  //포스트와 연결된(Post-Post_MusicData-MusicData) MusicData의 정보도 가지고 옴
  findPost: async (req, res) => {
    console.log(req);
    // const postList = await Post.findAll({
    //   attributes: ["userId", "postTitle", "image", "postExplain", "createdAt"],
    // });
      const postList = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['nickname']
        },
        {
          model: MusicData,
        }]
      });
    res.status(200).json({ data: postList, message: "ok" });
  },

  //[post] post생성하기
  //Post에 레코드 생성
  //Post_musicData에 PostId에 해당하는 MusicDatumId를 새롭게 생성
  createPost: async (req, res) => {
    const { userId, postTitle, image, postExplain, createdAt, musicList } =
      req.body;
    const createdPost = await Post.create({
      userId: userId,
      postTitle: postTitle,
      image: image,
      postExplain: postExplain,
      createdAt: createdAt,
    }).then((result) => {
      //musicList에는 배열로 MusicData의 id가 들어오도록 함
      //key값 관련해서 오류 있을 수 있음.
      const bulkList = musicList.map((el) => {
        result.id, el;
      });
      Post_MusicData.bulkcreate(bulkList);
    });
    res.status(201).json("successfully created your post");
  },
  //[put]/:id 는 postId로 요청할 것
  //post 수정
  //db에 있는 해당 포스트 id 내용 수정 후
  //post_musicData에 있는 PostId 에 해당하는 데이터 삭제
  //post_musicData에 PostId에 해당하는 MusicDatumId를 새롭게 생성
  updatePost: async (req, res) => {
    const postId = req.params.id;
    const { postTitle, image, postExplain, musicList } = req.body;
    await User.update(
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
            id: postId,
          },
        });
      })
      .then(() => {
        const bulkList = musicList.map((el) => {
          postId, el;
        });
        Post_MusicData.bulkcreate(bulkList);
      });
    res.status(200).json("successfully updated your post");
  },

  //[delete]/:id 는 postId로 요청할 것
  //post 삭제
  //db에 있는 해당 포스트 id 삭제 후
  //Post_MusicData에 있는 PostId 에 해당하는 데이터 삭제
  deletePost: async (req, res) => {
    const postId = req.params.id;
    await Post.destroy({
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

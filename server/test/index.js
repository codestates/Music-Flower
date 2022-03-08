//이것은 예시이다.
const db = require("../models");
const { User } = require("../models");
const { Post } = require("../models");
const Post_MusicData = db.sequelize.models.Post_MusicData;

module.exports = {
  create: async(req, res) => {
    const musicList = await Post_MusicData.bulkCreate([{
      PostId: 4,
      MusicDatumId:1
    },
    {
      PostId: 3,
      MusicDatumId:2
    },
    {
      PostId: 3,
      MusicDatumId:3
    },
    {
      PostId: 4,
      MusicDatumId:4
    },]);
    return res.send('this is test1');
  },
  destroy: (req, res) => {
    Post.destroy({
      where: {
        id: 1,
      },
    });
    return res.send('this is test2')
  }
};
const { MusicData } = require("../models");

module.exports = {
  //[GET]/musiclist?query={query} 요청 수행
  findMusic: async (req, res) => {
    const sequelize = require('sequelize');
    const Op = sequelize.Op;
    const wordSplit = req.query.query;
    const authCompWords = await MusicData.findAll({
      where: { musicTitle: { [Op.like]: '%' + wordSplit + '%' } },
    });
    const returnData = authCompWords.map((el) => el.musicTitle);
    res.status(200).json({
      data: returnData,
    });
  },
};
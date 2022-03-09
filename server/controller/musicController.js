const { MusicData } = require("../models");

module.exports = {
  //[get]/musiclist
  findMusic: async (req, res) => {
    const musicList = await MusicData.findAll();
    return res.status(200).json({ data: musicList, message: "ok" });
  }
}
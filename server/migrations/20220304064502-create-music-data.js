"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MusicData", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      musicTitle: {
        type: Sequelize.STRING,
      },
      artist: {
        type: Sequelize.STRING,
      },
      musicImage: {
        type: Sequelize.TEXT,
      },
      musicUrl: {
        type: Sequelize.TEXT,
      },
      genre: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MusicData");
  },
};

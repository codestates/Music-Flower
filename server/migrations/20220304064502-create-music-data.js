'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MusicData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      musicTitle: {
        type: Sequelize.STRING
      },
      artist: {
        type: Sequelize.STRING
      },
      musicImage: {
        type: Sequelize.STRING
      },
      musicUrl: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MusicData');
  }
};
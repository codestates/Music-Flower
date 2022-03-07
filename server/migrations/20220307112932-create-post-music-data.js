'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Post_MusicData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: 'foreign key',
        references: {
          model: "Posts",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      musicDatumId: {
        type: 'foreign key',
        references: {
          model: "MusicData",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Post_MusicData');
  }
};
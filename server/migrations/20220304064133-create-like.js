"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: 'foreign key',
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Likes");
  },
};

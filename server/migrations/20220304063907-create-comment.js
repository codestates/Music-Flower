"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
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
      comment: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
  },
};

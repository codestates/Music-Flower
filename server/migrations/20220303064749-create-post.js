"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
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
      postTitle: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      postExplain: {
        type: Sequelize.TEXT,
      },
      totalLike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      totalComment: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};

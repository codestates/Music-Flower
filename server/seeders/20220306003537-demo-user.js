"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nickname: "손코딩",
          email: "test@naver.com",
          password: "test",
          createdAt: new Date(),
        },
        {
          nickname: "김코딩",
          email: "test2@naver.com",
          password: "test",
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

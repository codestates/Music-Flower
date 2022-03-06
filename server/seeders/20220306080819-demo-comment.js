'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
        userId: 2,
        postId: 1,
        comment: '귀갓길, 추천해주신 음악 들으면서 갑니다. 좋은 음악 추천 감사합니다.',
        createdAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [{
      userId: 2,
      postId: 1
    },
    {
      userId: 1,
      postId: 3
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {}); 
  }
};

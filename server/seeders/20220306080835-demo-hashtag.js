'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hashtags', [{
      tagname: '봄'
    },
    {
      tagname: '여름'
    },
    {
      tagname: '겨울'
    },
    {
      tagname: '감성'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hashtags', null, {});
  }
};

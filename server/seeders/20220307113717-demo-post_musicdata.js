'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_MusicData', [{
      PostId: 1,
      MusicDatumId:1
    },
    {
      PostId: 1,
      MusicDatumId:2
    },
    {
      PostId: 2,
      MusicDatumId:3
    },
    {
      PostId: 3,
      MusicDatumId:4
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post_MusicData', null, {});
  }
};

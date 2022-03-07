'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_MusicData', [{
      postId: 1,
      musicDatumId:1
    },
    {
      postId: 1,
      musicDatumId:2
    },
    {
      postId: 2,
      musicDatumId:3
    },
    {
      postId: 3,
      musicDatumId:4
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post_MusicData', null, {});
  }
};

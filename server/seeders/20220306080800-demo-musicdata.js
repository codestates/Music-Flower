'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MusicData', [{
      musicTitle: '돌핀(Dolphin)',
      artist: '오마이걸',
      musicImage: '',
      musicUrl: 'https://www.youtube.com/watch?v=9CvKAvkMdJM',
      genre: 'Kpop'
    },
    {
      musicTitle: 'Gymnopédie No.1',
      artist: 'Erik Satie',
      musicImage: '',
      musicUrl: 'https://www.youtube.com/watch?v=S-Xm7s9eGxU',
      genre: 'Classic'
    },
    {
      musicTitle: '회전목마',
      artist: '쇼코도모',
      musicImage: '',
      musicUrl: 'https://www.youtube.com/watch?v=ZcGB8Yc_SlE',
      genre: 'Hiphop'
    },
    {
      musicTitle: 'She looks so perfect',
      artist: '5 Seconds of Summer',
      musicImage: '',
      musicUrl: 'https://www.youtube.com/watch?v=X2BYmmTI04I',
      genre: 'pop'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('MusicData', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      userId: 1,
      postTitle: "봄에 듣기 좋은 노래",
      image: "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
      postExplain: "봄날의 꿈, 잘 꾸고 게신가요? 꿈결 같은 봄에 들으면 더 좋은 노래입니다",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    },{
      userId: 2,
      postTitle: "여름에 듣기 좋은 노래",
      image: "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
      postExplain: "더운 여름 어떻게 보내고 계신가요? 저는 이 노래를 들으며 더위를 식혀요",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    },{
      userId: 2,
      postTitle: "겨을에 듣기 좋은 노래",
      image: "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
      postExplain: "크리스마스가 다가오네요. 겨울에 듣기 좋은 노래들을 모아봤습니다. 즐거운 성탄절 되시길!",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

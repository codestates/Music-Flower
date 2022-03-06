'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      userId: 1,
      postTitle: "봄에 듣기 좋은 노래",
      image: "https://us.123rf.com/450wm/yusufdemirci/yusufdemirci1803/yusufdemirci180300346/97820259-%EC%98%88%EC%88%A0-%EA%B3%B5%EC%97%B0%EC%9D%84%ED%95%98%EB%8A%94-%EC%95%84%EC%9D%B4%EB%93%A4%EC%9D%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4%EC%85%98.jpg?ver=6",
      postExplain: "봄에 들으면 더 좋은 노래입니다",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    },{
      userId: 1,
      postTitle: "여름에 듣기 좋은 노래",
      image: "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
      postExplain: "여름에 들으면 더 좋은 노래입니다",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    },{
      userId: 1,
      postTitle: "겨을에 듣기 좋은 노래",
      image: "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
      postExplain: "겨울에 들으면 더 좋은 노래입니다",
      totalLike: 0,
      totalComment: 0,
      createdAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

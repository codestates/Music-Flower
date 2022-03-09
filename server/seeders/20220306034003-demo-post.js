"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          postTitle: "봄에 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/07/351/77/497189050_org.jpg?tm=20220301103550/melon/resize/x236/quality/80/optimize",
          postExplain:
            "봄날의 꿈, 잘 꾸고 게신가요? 꿈결 같은 봄에 들으면 더 좋은 노래입니다",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },

        {
          userId: 1,
          postTitle: "가을에 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2022/01/7/60/505074448_org.jpg?tm=20220301060026/melon/resize/x236/quality/80/optimize",
          postExplain: "시원한 가을 음악을 들으며 여유를 즐겨보세요.",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },

        {
          userId: 2,
          postTitle: "여행, 힐링을 위한 음악",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/12/397/23/440853128_org.jpg?tm=20220126081541/melon/resize/x236/quality/80/optimize",
          postExplain: "바쁘다 바빠 현대사회! 커피와 함께 여유를 즐겨보세요.",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 2,
          postTitle: " 지루할 때 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2022/02/148/54/506288133_org.jpg?tm=20220307064445/melon/resize/x236/quality/80/optimize",
          postExplain: "힙스터들과 세련된 이들에게 드리는 선물입니다. ",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 1,
          postTitle: "여름에 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2020/02/462/36/472852208_org.jpg?tm=20201018031659/melon/resize/x236/quality/80/optimize",
          postExplain:
            "더운 여름 어떻게 보내고 계신가요? 저는 이 노래를 들으며 더위를 식혀요",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },

        {
          userId: 1,
          postTitle: "겨을에 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/01/175/69/487951872_org.jpg?tm=20220224061254/melon/resize/x236/quality/80/optimize",
          postExplain:
            "크리스마스가 다가오네요. 겨울에 듣기 좋은 노래들을 모아봤습니다. 즐거운 성탄절 되시길!",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 2,
          postTitle: "애묘,애견인을을 위한 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2020/02/462/36/472852208_org.jpg?tm=20201018031659/melon/resize/x236/quality/80/optimize",
          postExplain: " 동물도 음악을 즐겨 듣는다는 사실 알고 계신가요? ",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 2,
          postTitle: "운동할 때 듣기 좋은 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/11/547/20/472310607_org.jpg?tm=20211210062211/melon/resize/x236/quality/80/optimize",
          postExplain: "음악을 들으며 더 즐겁게 운동해 보세요 ",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 2,
          postTitle: "집중력 향상을 위한 노래",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/11/547/20/472310607_org.jpg?tm=20211210062211/melon/resize/x236/quality/80/optimize",
          postExplain: "집중이 필요하신가요?",
          totalLike: 0,
          totalComment: 0,
          createdAt: new Date(),
        },
        {
          userId: 1,
          postTitle: "클래식을 위한 음악",
          image:
            "https://cdnimg.melon.co.kr/svc/user_images/plylst/2017/09/313/90/434559796_org.png?tm=20170929094509/melon/resize/x236/quality/80/optimize",
          postExplain: "클래식은 영원하다",
          totalLike: 0,
          totalComment: 0,
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

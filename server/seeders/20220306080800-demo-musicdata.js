'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MusicData', [{
      musicTitle: '돌핀(Dolphin)',
      artist: '오마이걸',
      musicImage: 'https://i.scdn.co/image/ab67616d000048514957fced6061ee536ca618ab',
      musicUrl: 'https://www.youtube.com/watch?v=9CvKAvkMdJM',
      genre: 'Kpop'
    },
    {
      musicTitle: 'Gymnopédie No.1',
      artist: 'Erik Satie',
      musicImage: 'https://i.scdn.co/image/ab67616d00004851fa24c97b4c8aaf5ccdcccf08',
      musicUrl: 'https://www.youtube.com/watch?v=S-Xm7s9eGxU',
      genre: 'Classic'
    },
    {
      musicTitle: '회전목마',
      artist: '쇼코도모',
      musicImage: 'https://i.scdn.co/image/ab67616d000048514f558c990fd8ab33abf4091a',
      musicUrl: 'https://www.youtube.com/watch?v=ZcGB8Yc_SlE',
      genre: 'Hiphop'
    },
    {
      musicTitle: 'She looks so perfect',
      artist: '5 Seconds of Summer',
      musicImage: 'https://i.scdn.co/image/ab67616d0000485124dea8a1edf4a5b9a10fb67a',
      musicUrl: 'https://www.youtube.com/watch?v=X2BYmmTI04I',
      genre: 'Pop'
    },
    {
      musicTitle: "Butter",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851240447f2da1433d8f4303596",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Permission to Dance",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851a7e481899b7e0396f93d10b8",
      musicUrl: '',
      genre: 'Kpop'
      },
    {
      musicTitle: "봄날",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851e23a7fd165b24c517a66a69f",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Film out",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485134938530af5d2d98acf174fc",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Film out",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485134938530af5d2d98acf174fc",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "소우주 (Mikrokosmos)",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485146d3e73ccbfde4ee771b7e76",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485146d3e73ccbfde4ee771b7e76",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Heartbeat (BTS World Original Soundtrack)",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048516fca8304dc8899561b7e6c8c",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "DNA",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851e4191ad1d32f0d7131e438ef",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "진격의 방탄",
      artist: "방탄소년단",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048517b7bb83437b5dae3bde4d986",
      musicUrl: '',
      genre: 'Kpop'
    },
  
    {
      musicTitle: "라일락",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "strawberry moon",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851c4d4ade422fa74b8512fd85e",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "에잇(Prod.&Feat. SUGA of BTS)",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851c63be04ae902b1da7a54d247",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Blueming",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851b658276cd9884ef6fae69033",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "삐삐",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851a1d785640d9421ec17ea8fe6",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "드라마",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048510d378c4756c4fc34b7d3eeaf",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Celebrity",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "내 손을 잡아 (Hold my hand)",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851875e1dfcd66b03f975f73c6d",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Celebrity",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048512fda07910d40ee81e620fe3f",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Love poem",
      artist: "아이유",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851b658276cd9884ef6fae69033",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Gee",
      artist: "소녀시대",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048519b57e9b31c831fb2137c38e2",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Oh!",
      artist: "소녀시대",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048519b57e9b31c831fb2137c38e2",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Lion Heart",
      artist: "소녀시대",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048517ce0130c09547c733984ba0e",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "몰랐니 (Lil′ Touch)",
      artist: "소녀시대-Oh!GG",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851293d78b4eb363c7a34b2a13d",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "소녀시대 (Girls' Generation)",
      artist: "소녀시대",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048511111b7562b4b46870d27f98b",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "다시 만난 세계 (Into The New World)",
      artist: "소녀시대",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048511111b7562b4b46870d27f98b",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "INVU",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Can't Control Myself",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485103dcf797238bdb6908f80c93",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "I",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851f531f18feaf3c28366ad52d4",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Fine",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048518c7e7f435fdcc70772c5555e",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Weekend",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851f4eaffe012c3fc3b73a61bb2",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "그대라는 시",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048513e55466ef35eedd766b6faaf",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "사계",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048517de8f56a39ec67a091457d04",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "그런 밤 (Some Nights)",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "Can't Control Myself",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "11:11",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851342d8ee7298f2e9a38d24368",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "불티 (Spark)",
      artist: "태연",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851b87c0d76ed9c7b1654b390d0",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "사랑은 늘 도망가",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851e56f69fd58795fbbcbc919f2",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "이제 나만 믿어요",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851e76a3b26a23718f8772bb6fa",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "HERO",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d0000485120b05d0ab75d4c27f1e4bbd6",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "별빛 같은 나의 사랑아",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851c5e163c2edcdb27d99e405c5",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "어느 60대 노부부이야기",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d000048515e398aad3cafefdfb2d507d7",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "응급실",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851d277fe3056564104db5ff34a",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "바램",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851ef7ba75a6bc90cbd4082173f",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "깊은밤을 날아서",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851c5df1be11cdb9f1ec0c0183b",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "다시 사랑한다면 (김필 Ver.)",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851df6d4ebea5338e798ea83040",
      musicUrl: '',
      genre: 'Kpop'
    },
    {
      musicTitle: "잊었니",
      artist: "임영웅",
      musicImage:
        "https://i.scdn.co/image/ab67616d00004851ea0eeddb354420b90c6e0433",
      musicUrl: '',
      genre: 'Kpop'
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('MusicData', null, {});
  }
};

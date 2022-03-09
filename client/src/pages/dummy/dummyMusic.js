const dummyMusics = [
  {
    songName: "Butter",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851240447f2da1433d8f4303596",
  },
  {
    songName: "Permission to Dance",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851a7e481899b7e0396f93d10b8",
  },
  {
    songName: "봄날",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851e23a7fd165b24c517a66a69f",
  },
  {
    songName: "Film out",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485134938530af5d2d98acf174fc",
  },
  {
    songName: "Film out",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485134938530af5d2d98acf174fc",
  },
  {
    songName: "소우주 (Mikrokosmos)",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485146d3e73ccbfde4ee771b7e76",
  },
  {
    songName: "작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485146d3e73ccbfde4ee771b7e76",
  },
  {
    songName: "Heartbeat (BTS World Original Soundtrack)",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048516fca8304dc8899561b7e6c8c",
  },
  {
    songName: "DNA",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851e4191ad1d32f0d7131e438ef",
  },
  {
    songName: "진격의 방탄",
    artist: "방탄소년단",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048517b7bb83437b5dae3bde4d986",
  },

  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
    artist: "아이유",
    songName: "라일락",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851c4d4ade422fa74b8512fd85e",
    artist: "아이유",
    songName: "strawberry moon",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851c63be04ae902b1da7a54d247",
    artist: "아이유",
    songName: "에잇(Prod.&Feat. SUGA of BTS)",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851b658276cd9884ef6fae69033",
    artist: "아이유",
    songName: "Blueming",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851a1d785640d9421ec17ea8fe6",
    artist: "아이유",
    songName: "삐삐",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048510d378c4756c4fc34b7d3eeaf",
    artist: "아이유",
    songName: "드라마",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
    artist: "아이유",
    songName: "Celebrity",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851875e1dfcd66b03f975f73c6d",
    artist: "아이유",
    songName: "내 손을 잡아 (Hold my hand)",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048512fda07910d40ee81e620fe3f",
    artist: "아이유",
    songName: "Celebrity",
  },
  {
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851b658276cd9884ef6fae69033",
    artist: "아이유",
    songName: "Love poem",
  },
  {
    songName: "Gee",
    artist: "소녀시대",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048519b57e9b31c831fb2137c38e2",
  },
  {
    songName: "Oh!",
    artist: "소녀시대",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048519b57e9b31c831fb2137c38e2",
  },
  {
    songName: "Lion Heart",
    artist: "소녀시대",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048517ce0130c09547c733984ba0e",
  },
  {
    songName: "몰랐니 (Lil′ Touch)",
    artist: "소녀시대-Oh!GG",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851293d78b4eb363c7a34b2a13d",
  },
  {
    songName: "소녀시대 (Girls' Generation)",
    artist: "소녀시대",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048511111b7562b4b46870d27f98b",
  },
  {
    songName: "다시 만난 세계 (Into The New World)",
    artist: "소녀시대",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048511111b7562b4b46870d27f98b",
  },
  {
    songName: "INVU",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
  },
  {
    songName: "Can't Control Myself",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485103dcf797238bdb6908f80c93",
  },
  {
    songName: "I",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851f531f18feaf3c28366ad52d4",
  },
  {
    songName: "Fine",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048518c7e7f435fdcc70772c5555e",
  },
  {
    songName: "Weekend",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851f4eaffe012c3fc3b73a61bb2",
  },
  {
    songName: "그대라는 시",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048513e55466ef35eedd766b6faaf",
  },
  {
    songName: "사계",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048517de8f56a39ec67a091457d04",
  },
  {
    songName: "그런 밤 (Some Nights)",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
  },
  {
    songName: "Can't Control Myself",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851034c3a8ba89c6a5ecfda3175",
  },
  {
    songName: "11:11",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851342d8ee7298f2e9a38d24368",
  },
  {
    songName: "불티 (Spark)",
    artist: "태연",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851b87c0d76ed9c7b1654b390d0",
  },
  {
    songName: "사랑은 늘 도망가",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851e56f69fd58795fbbcbc919f2",
  },
  {
    songName: "이제 나만 믿어요",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851e76a3b26a23718f8772bb6fa",
  },
  {
    songName: "HERO",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d0000485120b05d0ab75d4c27f1e4bbd6",
  },
  {
    songName: "별빛 같은 나의 사랑아",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851c5e163c2edcdb27d99e405c5",
  },
  {
    songName: "어느 60대 노부부이야기",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d000048515e398aad3cafefdfb2d507d7",
  },
  {
    songName: "응급실",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851d277fe3056564104db5ff34a",
  },
  {
    songName: "바램",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851ef7ba75a6bc90cbd4082173f",
  },
  {
    songName: "깊은밤을 날아서",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851c5df1be11cdb9f1ec0c0183b",
  },
  {
    songName: "다시 사랑한다면 (김필 Ver.)",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851df6d4ebea5338e798ea83040",
  },
  {
    songName: "잊었니",
    artist: "임영웅",
    albumImageUrl:
      "https://i.scdn.co/image/ab67616d00004851ea0eeddb354420b90c6e0433",
  },
];

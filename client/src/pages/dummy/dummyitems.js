// 서버에있는 모든 포스트들을 넣음
const allPosts = [
  {
    id: 1,
    postTitle: "봄에 듣기 좋은 노래",
    imageUrl:
      "https://us.123rf.com/450wm/yusufdemirci/yusufdemirci1803/yusufdemirci180300346/97820259-%EC%98%88%EC%88%A0-%EA%B3%B5%EC%97%B0%EC%9D%84%ED%95%98%EB%8A%94-%EC%95%84%EC%9D%B4%EB%93%A4%EC%9D%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4%EC%85%98.jpg?ver=6",
    nickname: "김코딩",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
  {
    id: 2,
    postTitle: "여름에 듣기 좋은 노래",
    imageUrl:
      "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
    nickname: "박해커",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
  {
    id: 3,
    postTitle: "가을에 듣기 좋은 노래",
    imageUrl:
      "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
    nickname: "뮤지션",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
  {
    id: 4,
    postTitle: "겨울에 듣기 좋은 노래",
    imageUrl:
      "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
    nickname: "하루",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
  {
    id: 5,
    postTitle: "봄에 듣기 좋은 노래",
    imageUrl:
      "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
    nickname: "김코딩",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
  {
    id: 6,
    postTitle: "이것은 테스트다",
    imageUrl:
      "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
    nickname: "손코딩",
    postExplain: "이것은 테스트다",
    musicList: [
      {
        songName: "분홍신",
        artist: "아이유",
        albumImageUrl:
          "https://cdn.topstarnews.net/news/photo/first/201310/img_41980_1.jpg",
        youtubeLink: "유투브링크",
      },
      {
        songName: "뱅뱅뱅",
        artist: "빅뱅",
        albumImageUrl:
          "https://image.bugsm.co.kr/album/images/original/2669/266970.jpg?version=undefined",
        youtubeLink: "유투브링크",
      },
    ],
    totalLike: "30",
    tags: ["봄", "좋은노래"],
  },
];

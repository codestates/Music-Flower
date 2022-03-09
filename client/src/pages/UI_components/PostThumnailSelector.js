import React, { useState } from "react";

const PostThumnailSelecter = ({ setPostPoto, image, detailData }) => {
  console.log("image:", detailData.image);
  // console.log("label : ", label);
  const [photo, setphoto] = useState("sellect");
  // const [photoIdx, setPotoIdx] = useState(0);
  let label = "";
  console.log("photo", photo);
  let options = [
    {
      id: 1,
      name: "k-pop",
    },
    { id: 2, name: "sping" },
    { id: 3, name: "summer" },
    { id: 4, name: "fall" },
    { id: 5, name: "winter" },
    { id: 6, name: "driving" },
    { id: 7, name: "trip" },
    { id: 8, name: "exersice" },
    { id: 9, name: "sky" },
  ];

  const images = {
    "k-pop":
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2022/01/534/19/504409521_org.jpg?tm=20220228124021/melon/resize/x236/quality/80/optimize",
    sping:
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/07/351/77/497189050_org.jpg?tm=20220301103550/melon/resize/x236/quality/80/optimize",
    summer:
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2020/02/462/36/472852208_org.jpg?tm=20201018031659/melon/resize/x236/quality/80/optimize",
    fall: "https://cdnimg.melon.co.kr/svc/user_images/plylst/2022/01/7/60/505074448_org.jpg?tm=20220301060026/melon/resize/x236/quality/80/optimize",
    winter:
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/01/175/69/487951872_org.jpg?tm=20220224061254/melon/resize/x236/quality/80/optimize",
    driving:
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/12/397/23/440853128_org.jpg?tm=20220126081541/melon/resize/x236/quality/80/optimize",
    trip: "https://cdnimg.melon.co.kr/svc/user_images/plylst/2022/02/148/54/506288133_org.jpg?tm=20220307064445/melon/resize/x236/quality/80/optimize",
    exersice:
      "https://cdnimg.melon.co.kr/svc/user_images/plylst/2021/11/547/20/472310607_org.jpg?tm=20211210062211/melon/resize/x236/quality/80/optimize",
    sky: "https://cdnimg.melon.co.kr/svc/user_images/plylst/2017/09/313/90/434559796_org.png?tm=20170929094509/melon/resize/x236/quality/80/optimize",
  };
  // console.log("options : ", options);
  // console.log("selectedValue : ", selectedValue);
  // console.log("changed : ", changed);

  const dropdownChanged = (e) => {
    setphoto(e.target.value);
  };
  // dropdownChanged 안에 넣으면 박자 느림 이유를 몰루 아 바뀌기 전에거가 들어가서 그란가?
  setPostPoto(images[photo] || detailData.image);
  return (
    <div id="thumnailSelecter">
      <div>
        <label className="form-label col-sm-2">{label}</label>
        <select
          value={photo}
          // idx={photoIdx}
          onChange={dropdownChanged}
          className="form-control form-control-sm col-sm-10"
        >
          <option key={0}>이미지를 선택하세요</option>
          {options.map((item, idx) => (
            <option key={idx + 1} value={item.idx}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <img src={images[photo]} style={{ height: "20vh", width: "20vh" }} />
    </div>
  );
};

export default PostThumnailSelecter;

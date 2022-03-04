//이것은 예시이다.
const { User } = require("../models");

module.exports = async() => {
  const flower2 = await User.create({
    nickname: "Flower2",
    email: "flower2@gamil.com",
    password: 1234,
  });
};
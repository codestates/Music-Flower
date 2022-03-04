const { User } = require("../models");

module.exports = {
  logIn: (req, res) => {
    res.status(200).json('ok');
  },
  logOut: (req, res) => {
    res.status(200).json('ok');
  },
  signUp: (req, res) => {
    res.status(200).json('ok');
  },
  findUser: (req, res) => {
    res.status(200).json('ok');
  }, 
  updateUser: (req, res) => {
    res.status(200).json('ok');
  }, 
  deleteUser: (req, res) => {
    res.status(200).json('ok');
  }
}
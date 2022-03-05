'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Like, {foreignKey: "postId", sourceKey:'id'});
      models.User.hasMany(models.Comment, {foreignKey: "postId", sourceKey:'id'});
      models.User.hasMany(models.Post, {foreignKey: "postId", sourceKey:'id'});
    }
  }
  User.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
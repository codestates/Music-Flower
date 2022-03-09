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
      
      models.User.hasMany(models.Post, { foreignKey: 'userId', onDelete: 'cascade', sourceKey: 'id'});
    }
  }
  User.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    modelName: 'User',
  });
  return User;
};
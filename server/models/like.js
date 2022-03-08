'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Like.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade', targetKey: 'id'});
      models.Like.belongsTo(models.Post, { foreignKey: 'postId', onDelete: 'cascade', targetKey: 'id'});
    }
  }
  Like.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Like',
  });
  return Like;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_MusicData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Like.belongsTo(models.Post, { foreignKey: 'postId', targetKey: 'id'});
      models.Like.belongsTo(models.MusicData, { foreignKey: 'musicDatumId', targetKey: 'id'});
    }
  }
  Post_MusicData.init({
    postId: DataTypes.INTEGER,
    musicDatumId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Post_MusicData',
  });
  return Post_MusicData;
};
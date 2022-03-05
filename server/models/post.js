'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.hasMany(models.Like, {foreignKey: "postId", sourceKey:'id'});
      models.Post.hasMany(models.Comment, {foreignKey: "postId", sourceKey:'id'});
      models.Post.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});

      const Post_MusicData = sequelize.define('Post_MusicData', {}, {timestamps: false});
      models.Post.belongsToMany(models.MusicData, {through:Post_MusicData});

      const Post_Hashtag = sequelize.define('Post_Hashtag', {}, {timestamps: false});
      models.Post.belongsToMany(models.Hashtag, {through:Post_Hashtag});
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    image: DataTypes.STRING,
    postExplain: DataTypes.STRING,
    totalLike: DataTypes.INTEGER,
    totalComment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Post.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
      });

      const Post_MusicData = sequelize.define("Post_MusicData", {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
        },
        PostId: {
          type: 'foreign key',
          references: {
            model: "Posts",
            key: "id",
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        MusicDatumId: {
          type: 'foreign key',
          references: {
            model: "MusicData",
            key: "id",
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      },
        { timestamps: false })

      models.Post.belongsToMany(models.MusicData, {
        through: Post_MusicData });
    }
  }
  Post.init(
    {
      userId: DataTypes.INTEGER,
      postTitle: DataTypes.STRING,
      image: DataTypes.TEXT,
      postExplain: DataTypes.TEXT,
      totalLike: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totalComment: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: false,
      modelName: "Post",
    }
  );
  return Post;
};

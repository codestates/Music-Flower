'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Hashtag.belongsToMany(models.Post, {through:'Post_Hashtag'})
    }
  }
  Hashtag.init({
    tagname: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Hashtag',
  });
  return Hashtag;
};
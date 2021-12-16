'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.User)
    }
  };
  Property.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    roomNb: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    keywords: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
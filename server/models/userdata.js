'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserData.init({
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    profession: DataTypes.STRING,
    latestEducation: DataTypes.STRING,
    major: DataTypes.STRING,
    ProvinceId: DataTypes.INTEGER,
    KabupatenId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserData',
  });
  return UserData;
};
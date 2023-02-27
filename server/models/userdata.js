'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserData.belongsTo(models.User, { foreignKey: 'UserId' });
      UserData.belongsTo(models.Province, { foreignKey: 'ProvinceId' });
      UserData.belongsTo(models.Kabupaten, { foreignKey: 'KabupatenId' });
    }
  }
  UserData.init(
    {
      fullName: DataTypes.STRING,
      address: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      phoneNumber: DataTypes.STRING,
      profession: DataTypes.STRING,
      latestEducation: DataTypes.STRING,
      major: DataTypes.STRING,
      ProvinceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Provinces',
          key: 'id',
        },
      },
      KabupatenId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Kabupatens',
          key: 'id',
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'UserData',
    },
  );
  return UserData;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kabupaten.hasMany(models.UserData, { foreignKey: 'KabupatenId' });
      Kabupaten.belongsTo(models.Province, { foreignKey: 'ProvinceId' });
    }
  }
  Kabupaten.init(
    {
      name: DataTypes.STRING,
      ProvinceId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Kabupaten',
    },
  );
  return Kabupaten;
};

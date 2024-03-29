'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TryOut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TryOut.hasMany(models.Result, { foreignKey: 'TryOutId' });
      TryOut.hasMany(models.Verbal, { foreignKey: 'TryOutId' });
      TryOut.hasMany(models.Quantitative, { foreignKey: 'TryOutId' });
      TryOut.hasMany(models.ProblemSolving, { foreignKey: 'TryOutId' });
    }
  }
  TryOut.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'TryOut',
    },
  );
  return TryOut;
};

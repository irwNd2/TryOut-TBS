'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsTo(models.TryOut, { foreignKey: 'TryOutId' });
      Result.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }
  Result.init(
    {
      totalGrade: DataTypes.INTEGER,
      verbalGrade: DataTypes.INTEGER,
      quantitativeGrade: DataTypes.INTEGER,
      problemSolvingGrade: DataTypes.INTEGER,
      TryOutId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'TryOuts',
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
      modelName: 'Result',
    },
  );
  return Result;
};

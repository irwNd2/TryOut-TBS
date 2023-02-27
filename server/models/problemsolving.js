'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProblemSolving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProblemSolving.belongsTo(models.TryOut, { foreignKey: 'TryOutId' });
    }
  }
  ProblemSolving.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      explanation: DataTypes.TEXT,
      TryOutId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'TryOuts',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ProblemSolving',
    },
  );
  return ProblemSolving;
};

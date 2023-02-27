'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verbal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Verbal.belongsTo(models.TryOut, { foreignKey: 'TryOutId' });
    }
  }
  Verbal.init(
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
      optionA: DataTypes.TEXT,
      optionB: DataTypes.TEXT,
      optionC: DataTypes.TEXT,
      optionD: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Verbal',
    },
  );
  return Verbal;
};

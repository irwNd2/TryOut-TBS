'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.Answer, { foreignKey: 'AnswerId' });
      Question.belongsTo(models.TryOut, { foreignKey: 'TryOutId' });
    }
  }
  Question.init(
    {
      question: DataTypes.TEXT,
      AnswerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Answers',
          key: 'id',
        },
      },
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
      modelName: 'Question',
    },
  );
  return Question;
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quantitatives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.TEXT,
      },
      answer: {
        type: Sequelize.TEXT,
      },
      explanation: {
        type: Sequelize.TEXT,
      },
      optionA: {
        type: Sequelize.TEXT,
      },
      optionB: {
        type: Sequelize.TEXT,
      },
      optionC: {
        type: Sequelize.TEXT,
      },
      optionD: {
        type: Sequelize.TEXT,
      },
      TryOutId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TryOuts',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Quantitatives');
  },
};

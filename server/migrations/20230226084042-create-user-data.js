'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      profession: {
        type: Sequelize.STRING,
      },
      latestEducation: {
        type: Sequelize.STRING,
      },
      major: {
        type: Sequelize.STRING,
      },
      ProvinceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinces',
          key: 'id',
        },
      },
      KabupatenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kabupatens',
          key: 'id',
        },
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
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
    await queryInterface.dropTable('UserData');
  },
};

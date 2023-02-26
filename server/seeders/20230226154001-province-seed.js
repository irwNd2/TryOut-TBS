'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = require('../data/province.json').map((el) => {
      delete el.id;
      delete el.alt_name;
      delete el.latitude;
      delete el.longitude;
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert('Provinces', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Provinces', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

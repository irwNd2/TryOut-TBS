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
    const data = require('../data/kabupaten.json').map((el) => {
      delete el.id;
      delete el.alt_name;
      delete el.latitude;
      delete el.longitude;
      el.ProvinceId = el.province_id;
      delete el.province_id;
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert('Kabupatens', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kabupatens', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'processors',
      [
        {
          name: 'Apple A12 Bionic',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Apple A13 Bionic',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Apple A14 Bionic',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Apple A15 Bionic',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Qualcomm Snapkdragon 8 Gen 2',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Galaxy A24',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          name: 'Galaxy S22',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

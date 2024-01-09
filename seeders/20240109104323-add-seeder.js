'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          brand: 'IPhone',
          model: 'XR',
          manufactured_year: 2016,
          ram_size: 3,
          screen_diagonal: 6.06,
          processor: 'Apple A12 Bionic',
          has_nfc: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'IPhone',
          model: '11',
          manufactured_year: 2019,
          ram_size: 4,
          screen_diagonal: 6.1,
          processor: 'Apple A13 Bionic',
          has_nfc: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'IPhone',
          model: '13',
          manufactured_year: 2022,
          ram_size: 4,
          screen_diagonal: 6.1,
          processor: 'Apple A15 Bionic',
          has_nfc: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'IPhone',
          model: '12 Pro',
          manufactured_year: 2020,
          ram_size: 6,
          screen_diagonal: 6.1,
          processor: 'Apple A14 Bionic',
          has_nfc: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'Samsung',
          model: 'Galaxy S23',
          manufactured_year: 2020,
          ram_size: 12,
          screen_diagonal: 6.8,
          processor: 'Qualcomm Snapkdragon 8 Gen 2',
          has_nfc: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'Samsung',
          model: 'Galaxy A24',
          manufactured_year: 2016,
          ram_size: 6,
          screen_diagonal: 6.5,
          processor: 'MediaTek Hailo G99',
          has_nfc: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          brand: 'Samsung',
          model: 'Galaxy S22',
          manufactured_year: 2019,
          ram_size: 8,
          screen_diagonal: 6.1,
          processor: 'Samsung Exynos 2200',
          has_nfc: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};

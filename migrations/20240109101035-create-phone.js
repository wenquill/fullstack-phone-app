'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      model: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      manufactured_year: {
        type: Sequelize.INTEGER
      },
      ram_size: {
        type: Sequelize.SMALLINT
      },
      processor: {
        type: Sequelize.STRING(64)
      },
      screen_diagonal: {
        type: Sequelize.REAL
      },
      has_nfc: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
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
      manufacturedYear: {
        type: Sequelize.INTEGER
      },
      ramSize: {
        type: Sequelize.INTEGER
      },
      processor: {
        type: Sequelize.STRING(64)
      },
      screenDiagonal: {
        type: Sequelize.REAL
      },
      hasNFC: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones');
  }
};
'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('processors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('processors', {
      fields: ['name'],
      name: 'name-constraint',
      type: 'check',
      where: {
        name: {
          [Op.ne]: '',
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('processors');
  },
};

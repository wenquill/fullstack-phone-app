'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      name: 'constraints',
      fields: ['manufactured_year', 'ram_size', 'screen_diagonal'],
      type: 'check',
      where: {
        manufactured_year: {
          [Op.between]: [1970, new Date().getFullYear()],
        },
        ram_size: {
          [Op.gte]: 0,
        },
        screen_diagonal: {
          [Op.gte]: 0,
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'constraints');
  },
};

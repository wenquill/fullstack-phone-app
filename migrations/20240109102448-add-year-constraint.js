'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      name: 'year-constraint',
      fields: ['manufactured_year'],
      type: 'check',
      where: {
        manufactured_year: {
          [Op.between]: [1970, new Date().getFullYear()],
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'year-constraint');
  },
};

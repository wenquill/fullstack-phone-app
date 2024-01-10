'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      name: 'ramsize-constraint',
      fields: ['ram_size'],
      type: 'check',
      where: {
        ram_size: {
          [Op.gt]: 0,
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'ramsize-constraint');
  },
};

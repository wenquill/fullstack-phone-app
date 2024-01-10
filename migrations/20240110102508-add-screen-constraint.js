'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      name: 'screen-constraint',
      fields: ['screen_diagonal'],
      type: 'check',
      where: {
        screen_diagonal: {
          [Op.gt]: 0,
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'screen-constraint');
  },
};

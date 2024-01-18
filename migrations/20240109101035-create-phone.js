'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      manufactured_year: {
        type: Sequelize.INTEGER,
      },
      ram_size: {
        type: Sequelize.SMALLINT,
      },
      processor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'processors',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      screen_diagonal: {
        type: Sequelize.REAL,
      },
      has_nfc: {
        type: Sequelize.BOOLEAN,
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

    await queryInterface.addConstraint('phones', {
      name: 'year-constraint',
      fields: ['manufactured_year'],
      type: 'check',
      where: {
        manufactured_year: {
          [Op.between]: [
            1970,
            Sequelize.literal('EXTRACT (year FROM CURRENT_DATE)'),
          ],
        },
      },
    });

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
    await queryInterface.dropTable('phones');
  },
};

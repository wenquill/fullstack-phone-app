'use strict';
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processor extends Model {
    static associate (models) {
      Processor.hasMany(models.Phone, {
        foreignKey: {
          name: 'processorId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Processor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^$/,
        },
      },
    },
    {
      sequelize,
      modelName: 'Processor',
      underscored: true,
    }
  );
  return Processor;
};

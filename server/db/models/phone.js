'use strict';
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      Phone.belongsTo(models.Processor, {
        foreignKey: 'processorId',
      });
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      manufacturedYear: {
        type: DataTypes.INTEGER,
        validate: {
          [Op.between]: [1970, new Date().getFullYear()],
        },
      },
      ramSize: {
        type: DataTypes.SMALLINT,
        validate: { [Op.gt]: 0 },
      },
      screenDiagonal: {
        type: DataTypes.REAL,
        validate: { [Op.gt]: 0 },
      },
      hasNfc: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};

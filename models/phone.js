'use strict';
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
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
        type: DataTypes.DATEONLY,
        validate: {
          [Op.between]: [1970, new Date().getFullYear()],
        },
      },
      ramSize: {
        type: DataTypes.INTEGER,
        validate: { [Op.gt]: 0 },
      },
      processor: {
        type: DataTypes.STRING,
        validate: { [Op.gt]: 0 },
      },
      screenDiagonal: {
        type: DataTypes.REAL,
        validate: { [Op.gt]: 0 },
      },
      hasNFC: {
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

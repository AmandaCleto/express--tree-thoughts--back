'use strict';

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class Emotion extends Model {

  static associate(models) {
    // define association here
  }
};

Emotion.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
  sequelize,
  modelName: 'Emotions',
});

module.exports = Emotion;
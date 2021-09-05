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
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Emotions',
});

module.exports = Emotion;
'use strict';

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class Thought extends Model {

  static associate(models) {
    // define association here
  }
};

Thought.init({
  description: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [1, 255],
        msg: 'É necessário no mínimo 1 caractere'
      },
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    validate: {
      len: {
        args: [1, 255],
        msg: 'É necessário no mínimo 1 caractere'
      },
    }
  },
  emotion_id: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: {
        msg: 'O campo precisa ser um número inteiro'
      },
    }
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
  sequelize,
  modelName: 'Thoughts',
});

module.exports = Thought;
'use strict';

const { DataTypes, Model } = require('sequelize');

class Thought extends Model {
  static init(sequelize) {
    super.init({
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
    })
  }
  static associate(models) {
    this.belongsTo(models.Emotions, {
      foreignKey: 'emotion_id',
      as: 'emotions'
    });
  }
};

module.exports = Thought;
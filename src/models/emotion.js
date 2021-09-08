'use strict';

const { DataTypes, Model } = require('sequelize');

class Emotion extends Model {
  static init(sequelize) {
    super.init({
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
    })
  }

  static associate(models) {
    this.hasOne(models.Thoughts, {
      foreignKey: 'emotion_id',
    });
  }
};

module.exports = Emotion;
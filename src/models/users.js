'use strict';

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');


class Users extends Model {
    
  static associate(models) {
    // define association here
  }
};

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.CHAR(60),
  profile_name: DataTypes.STRING,
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Users',
});

module.exports = Users;

  
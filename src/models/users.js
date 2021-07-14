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
  name: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: [/^([\w]{2,})+\s+([\w\s]{2,})+$/i],
        msg: 'Informe o nome e sobrenome'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        msg: 'O email informado é inválido'
      }
    },
    unique: {
      msg: 'O email já está cadastrado'
    },
  },
  password: DataTypes.CHAR(60),
  profile_name: DataTypes.STRING,
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
}, {
  hooks: {
    beforeValidate: (User, options) => {
      // User.changed criptografar senha
      // console.log(User, options);
    }
  },
  sequelize,
  modelName: 'Users',
});

module.exports = Users;
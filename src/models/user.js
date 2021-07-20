'use strict';

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const bcrypt = require('bcryptjs');

class User extends Model {

  static associate(models) {
    // define association here
  }
};

User.init({
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
  profile_image: DataTypes.STRING,
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
}, {
  hooks: {
    afterValidate: (User) => {
      User.password = bcrypt.hashSync(User.password, 10);
    }
  },
  sequelize,
  modelName: 'Users',
});

module.exports = User;
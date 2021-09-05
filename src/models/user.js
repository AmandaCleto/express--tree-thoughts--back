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
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
  defaultScope: {
    attributes: {
      exclude: ['password'],
    }
  },
  scopes: {
    withPassword: {
      attributes: { include: ['password'] },
    }
  },
  hooks: {
    afterValidate: (User) => {
      User.password = bcrypt.hashSync(User.password, 10);
    }
  },
  sequelize,
  modelName: 'Users',
});


module.exports = User;
const { Sequelize } = require('sequelize');
const process = require('process');

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});


module.exports = sequelize;
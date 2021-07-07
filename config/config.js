require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database:  DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
  }
}
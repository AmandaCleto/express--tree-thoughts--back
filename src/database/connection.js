const { Sequelize } = require('sequelize');
const process = require('process');

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

async function databaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully. 🚀');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = databaseConnection;
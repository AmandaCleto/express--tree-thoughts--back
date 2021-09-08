const { Sequelize } = require('sequelize');
const process = require('process');
const Thought = require('../models/thought');
const Emotion = require('../models/emotion');

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: true,
  }
});

/* initialize models */
Thought.init(sequelize);
Emotion.init(sequelize);

/* setting associations */
Thought.associate(sequelize.models);
Emotion.associate(sequelize.models);


module.exports = sequelize;
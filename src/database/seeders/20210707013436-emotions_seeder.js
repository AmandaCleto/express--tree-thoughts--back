'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Emotions', [
      {
        id: 1,
        name: 'undefined',
      },
      {
        id: 2,
        name: 'anger',
      },
      {
        id: 3,
        name: 'happiness',
      },
      {
        id: 4,
        name: 'sadness',
      },
      {
        id: 5,
        name: 'fear',
      },
      {
        id: 6,
        name: 'disgusted',
      },
      {
        id: 7,
        name: 'love',
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Emotions', null);
  }
};

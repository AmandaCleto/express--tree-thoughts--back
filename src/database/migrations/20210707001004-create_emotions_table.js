'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Emotions',
      {
        id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        create_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        update_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Emotions');
  }
};

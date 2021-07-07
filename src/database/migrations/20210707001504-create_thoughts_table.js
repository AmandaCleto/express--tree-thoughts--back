'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Thoughts',
      {
        id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        emoton_id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          references: {
            model: {
              tableName: 'Emotions',
            },
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
    await queryInterface.dropTable('Thoughts');
  }
};

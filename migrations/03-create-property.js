'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      sector: {
        type: Sequelize.STRING
      },
      roomNb: {
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        OnDelete: 'CASCADE',
        references : {
          model: 'Categories',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        OnDelete: 'CASCADE',
        references : {
          model: 'Users',
          key: 'id'
        }
      },
      keywords: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  }
};
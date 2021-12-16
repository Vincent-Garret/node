'use strict';
const bcrypt = require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
        name: 'Vincent',
        role:"admin",
        password:"password",
        age:34,
        phone: 658111497,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Greg',
        role: "agent",
        password:"password",
        age:12,
        phone: 658111497,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Tim',
        role: "agent",
        password:"password",
        age:25,
        phone: 658111497,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Sam',
        role: "agent",
        password:"password",
        age:24,
        phone: 658111497,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Luc',
        role: "agent",
        password:"password",
        age:25,
        phone: 658111497,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

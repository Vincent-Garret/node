'use strict';

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
     await queryInterface.bulkInsert('Properties', [{
        name: 'Superbe appartement',
        price: 250000,
        sector:"bordeaux",
        roomNb:4,
        description:"Superbe appartement en plein centre de Bordeaux",
        keywords:"Balcon, Terrasse, Lumineux",
        CategoryId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Superbe Maison',
        price: 500000,
        sector:"Merignac",
        roomNb:6,
        description:"Superbe maison en plein coeur de Merignac",
        keywords:"Terrasse, Jardin, Lumineux",
        CategoryId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Maison de ville',
        price: 816000,
        sector:"bordeaux",
        roomNb:5,
        description:"Superbe appartement en plein coeur de Bordeaux",
        keywords:"Balcon, Terrasse, Lumineux",
        CategoryId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Maison de campagne',
        price: 650000,
        sector:"Civrac de blaye",
        roomNb:8,
        description:"Superbe maison à 20min de Bordeaux",
        keywords:"Campagne, Jardin",
        CategoryId: 1,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Maison avec piscine',
        price: 750000,
        sector: "Pessac",
        roomNb: 4,
        description:"Superbe piscine avec vue sur le vignoble de haut-marbuzet",
        keywords:"Vignoble, Piscine, Barbecue, Jardin, Apéro",
        CategoryId: 1,
        UserId: 3,
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

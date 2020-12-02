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
    await queryInterface.bulkInsert('Sections', [{
    number: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 4,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  }], {});

    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Sections', [{
      number: 1
    }])
  }
};

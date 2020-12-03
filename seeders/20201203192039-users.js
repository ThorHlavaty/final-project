'use strict';
const bcrypt = require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    let hash = bcrypt.hashSync('1234', 10);

    await queryInterface.bulkInsert('Users', [{
      name: 'Manager',
      pin: hash,
      manager: true,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {
      name: 'Manager',
      pin: 1234,
      manager: true
    });
  }
};

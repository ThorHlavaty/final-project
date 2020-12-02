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
    await queryInterface.bulkInsert('Tables', [{
    number: 11,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 12,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 13,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 14,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 15,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 16,
    SectionId: 1,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 21,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 22,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 23,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 24,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 25,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 26,
    SectionId: 2,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 31,
    SectionId: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 32,
    SectionId: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 33,
    SectionId: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 34,
    SectionId: 4,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 41,
    SectionId: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 42,
    SectionId: 3,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 43,
    SectionId: 4,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 51,
    SectionId: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 52,
    SectionId: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 53,
    SectionId: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 54,
    SectionId: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 55,
    SectionId: 5,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 61,
    SectionId: 4,
    createdAt : new Date(),
    updatedAt : new Date(),
  },{
    number: 62,
    SectionId: 4,
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
    await queryInterface.bulkDelete('Tables', [{
      number: 11,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 12,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 13,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 14,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 15,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 16,
      SectionId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 21,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 22,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 23,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 24,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 25,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 26,
      SectionId: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 31,
      SectionId: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 32,
      SectionId: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 33,
      SectionId: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 34,
      SectionId: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 41,
      SectionId: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 42,
      SectionId: 3,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 43,
      SectionId: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 51,
      SectionId: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 52,
      SectionId: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 53,
      SectionId: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 54,
      SectionId: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 55,
      SectionId: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 61,
      SectionId: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      number: 62,
      SectionId: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
    }])}}
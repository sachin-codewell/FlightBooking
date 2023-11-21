'use strict';
const {v4:uuidv4} = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
      {
        id:uuidv4(),
        modelNumber:'Airbus A330-300',
        capacity:440,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:uuidv4(),
        modelNumber:'Boeing 777-200LR',
        capacity:550,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:uuidv4(),
        modelNumber:'Boeing 747-400',
        capacity:660,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:uuidv4(),
        modelNumber:'Douglas DC-3',
        capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:uuidv4(),
        modelNumber:'Embraer 145 ',
        capacity:220,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

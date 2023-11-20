'use strict';

const {v4:uuidv4} = require('uuid');

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
   await queryInterface.bulkInsert('Airports',[
    {
      id:uuidv4(),
      name:'Chaudhary Charan Singh ',
      cityId:'0eaa3384-3b14-425e-b0a6-7b76d192c5fa',
      address:'Amausi, Uttar Pradesh 226009',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Kempegowda',
      cityId:'0ca7ea5b-86c8-4ae6-a151-e92dda4d10bf',
      address:'Devanahalli, Karnataka 560300',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Rajiv Gandhi International Airport',
      cityId:'ae3a46d4-8db5-4bab-97a5-c19786f67f8e',
      address:'Shamshabad, Telangana 500409',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Begumpet Airport',
      cityId:'ae3a46d4-8db5-4bab-97a5-c19786f67f8e',
      address:'Shamshabad, Telangana 500409',
      createdAt:new Date(),
      updatedAt:new Date()
    }
   ])
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

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
      name:'Lucknow Int Airport',
      cityId:'968b5b74-2f73-4d86-80a1-f39bcb3399f6',
      address:'Lucknow, UP 226009',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Kempegowda, Banglore',
      cityId:'0ca7ea5b-86c8-4ae6-a151-e92dda4d10bf',
      address:'Devanahalli, Karnataka 560300',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Rajiv Gandhi Int Airport',
      cityId:'ae3a46d4-8db5-4bab-97a5-c19786f67f8e',
      address:'Hyderabad, Telangana 500409',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Begumpet Airport',
      cityId:'ae3a46d4-8db5-4bab-97a5-c19786f67f8e',
      address:'Hyderabad, Telangana 500409',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Babatpur Airport',
      cityId:'04e45357-6d4e-46be-9287-c054c5655dfe',
      address:'Varansi, UP',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Indira Gandhi Int',
      cityId:'530310f7-67d4-489c-9498-dd86582a7667',
      address:'New Delhi',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Chennai Int Airport',
      cityId:'183417c7-4c19-4931-931d-29f30edb5cdf',
      address:'Chennai, Tamilnadu',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:uuidv4(),
      name:'Chatrapati Shivaji Maharaj',
      cityId:'9bf4eb02-4b2a-4a0b-8ac1-8885ed284d67',
      address:'Mumbai, Maharashatra',
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

'use strict';
const {Deck } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Deck.bulkCreate([
      {name: "Музыка" },
    {name: "Кайты" },
    {name: "Криптовалюта"} ])
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Deck', null, {});
     
  }
};

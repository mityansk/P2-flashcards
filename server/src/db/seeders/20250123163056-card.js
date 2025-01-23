'use strict';
const { Card } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      { question: 'Сколько нот в октаве?', answer: 'Восемь', deck_id: 1 },
      { question: 'Как называется скорость музыки?', answer: 'Темп', deck_id: 1 },
      { question: "Что обозначает знак '♯'?", answer: 'Диез', deck_id: 1 },
      { question: 'Из чего сделана скрипка?', answer: 'Дерево', deck_id: 1 },
      { question: "Кто написал 'Лунную сонату'?", answer: 'Бетховен', deck_id: 1 },
      { question: 'Как называется вращение кайта вокруг своей оси?', answer: 'Кайтлуп', deck_id: 2 },
      { question: 'Сколько строп у кайтборда?', answer: 'Четыре', deck_id: 2 },
      {
        question: 'Как называется форма доски для кайтинга?',
        answer: 'Твинтип',
        deck_id: 2,
      },
      { question: 'Что такое чикен-луп?', answer: 'Петля', deck_id: 2 },
      { question: 'Какая форма у кайта для фрирайда?', answer: 'Дельта', deck_id: 2 },
      { question: 'Как называется первая криптовалюта?', answer: 'Биткоин', deck_id: 3 },
      { question: "Что такое NFT?", answer: 'Токен', deck_id: 3 },
      { question: 'Кто создал биткоин?', answer: 'Сатоши Накамото', deck_id: 3 },
      { question: 'Как называется книга транзакций?', answer: 'Блокчейн', deck_id: 3 },
      { question: "Что значит 'HODL'?", answer: 'Держи', deck_id: 3 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Card', null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Apprendre Node.js et express',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Étudier PostgreSQL et SQL',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Étudier Angular',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Étudier Nextjs',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Todos', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

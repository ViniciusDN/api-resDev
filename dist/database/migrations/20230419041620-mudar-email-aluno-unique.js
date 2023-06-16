"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() {
    // a
  },
};

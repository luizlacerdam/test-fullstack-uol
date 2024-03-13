/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Fulano',
        email: 'fulano@email.com',
        cpf: '12345678900',
        telephone: '11999999999',
        status: 'active',
      },
      {
        id: 2,
        name: 'Ciclano',
        email: 'ciclano@email.com',
        cpf: '12345678901',
        telephone: '11999999998',
        status: 'inactive',
      },
      {
        id: 3,
        name: 'Beltrano',
        email: 'beltrano@email.com',
        cpf: '12345678902',
        telephone: '11999999997',
        status: 'waiting_activation',
      },
      {
        id: 4,
        name: 'Sicrano',
        email: 'sicrano@email.com',
        cpf: '12345678903',
        telephone: '11999999996',
        status: 'desactivated',
      },
    ], { underscored: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

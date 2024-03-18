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
        cpf: '111.111.111-11',
        telephone: '(11) 88888-9999',
        status: 'active',
      },
      {
        id: 2,
        name: 'Ciclano',
        email: 'ciclano@email.com',
        cpf: '123.111.111-11',
        telephone: '(11) 99999-9999',
        status: 'inactive',
      },
      {
        id: 3,
        name: 'Beltrano',
        email: 'beltrano@email.com',
        cpf: '111.111.111-11',
        telephone: '(11) 99999-9999',
        status: 'waiting_activation',
      },
      {
        id: 4,
        name: 'Sicrano',
        email: 'sicrano@email.com',
        cpf: '123.456.789-00',
        telephone: '(21) 88555-9999',
        status: 'desactivated',
      },
    ], { underscored: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

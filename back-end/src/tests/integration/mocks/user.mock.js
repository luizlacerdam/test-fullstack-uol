/* eslint-disable sonarjs/no-duplicate-string */
const usersMock = [
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
];

const userMock = {
  id: 1,
  name: 'Fulano',
  email: 'fulano@email.com',
  cpf: '111.111.111-11',
  telephone: '(11) 88888-9999',
  status: 'active',
};

const newUserMock = {
  name: 'Fulano',
  email: 'fulano@email.com',
  cpf: '111.111.111-11',
  telephone: '(11) 88888-9999',
  status: 'active',
};

module.exports = { userMock, usersMock, newUserMock };
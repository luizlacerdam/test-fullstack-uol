const usersMock = [
  {
    id: 1,
    name: 'Fulano',
    email: 'fulano2@email.com',
    cpf: '12345678907',
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
  {
    id: 5,
    name: 'Foo',
    email: 'foo@email.com',
    cpf: '12345678907',
    telephone: '11999999999',
    status: 'active',
  },
];

const userMock = {
  id: 1,
  name: 'Fulano',
  email: 'fulano@email.com',
  cpf: '12345678907',
  telephone: '11999999999',
  status: 'active',
};

const newUserMock = {
  name: 'Fulano',
  email: 'fulano@email.com',
  cpf: '12345678907',
  telephone: '11999999999',
  status: 'active',
};

module.exports = { userMock, usersMock, newUserMock };

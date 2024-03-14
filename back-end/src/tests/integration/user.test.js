const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const { user } = require('../../database/models');
const { userMock, usersMock, newUserMock } = require('./mocks/user.mock');

chai.use(chaiHttp);
const app = require('../../api/app');

const { expect } = chai;

describe('Testing /user router', function () {
    afterEach(sinon.restore);
    it('GET in /user returns the list of users', async function () {
        sinon.stub(user, 'findAll').resolves(usersMock);

        const chaihttpResponse = await chai.request(app).get('/user');

        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal(usersMock);
    });
    it('GET in /user/1 returns one user', async function () {
        sinon.stub(user, 'findByPk').resolves(userMock);

        const chaihttpResponse = await chai.request(app).get('/user/1');

        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal(userMock);
    });
    it('PATCH in /user/1 returns "User updated successfully" and update user', async function () {
        sinon.stub(user, 'update').resolves(1);

        const chaihttpResponse = await chai.request(app).patch('/user/1')
        .send({ name: 'Fulano da Silva' });

        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal('User updated successfully');
    });
    it('POST in /user returns new user', async function () {
        sinon.stub(user, 'create').resolves(userMock);

        const chaihttpResponse = await chai.request(app).post('/user')
        .send(newUserMock);

        expect(chaihttpResponse.status).to.be.equal(201);
        expect(chaihttpResponse.body).to.be.deep.equal(userMock);
    });
});
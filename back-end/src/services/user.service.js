const { user } = require('../database/models');

const createUser = async (newUser) => {
    const createdUser = await user.create(newUser);
    return createdUser;
};

const editUser = async (id, updatedUser) => {
    const updated = await user.update(updatedUser, {
        where: { id },
    });
    return updated;
};

const getAllUsers = async () => {
    const users = await user.findAll();
    return users;
};

const getUserById = async (id) => {
    const u = await user.findByPk(id);
    return u;
};

module.exports = {
    createUser,
    editUser,
    getAllUsers,
    getUserById,
};
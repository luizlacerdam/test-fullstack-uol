const { userService } = require('../services');

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
};

const editUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        const updated = await userService.editUser(id, updatedUser);
        if (updated) {
            res.status(200).json('User updated successfully');
        } else {
            res.status(404).json('User not found');
        }
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json('User not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    editUser,
    getAllUsers,
    getUserById,
};
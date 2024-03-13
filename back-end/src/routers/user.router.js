const express = require('express');
const { userController } = require('../controllers');

const userRouter = express.Router();

userRouter.get('/:id', userController.getUserById);
userRouter.patch('/:id', userController.editUser);
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);

module.exports = userRouter;

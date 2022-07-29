const { UsersRepository } = require('../../schemas');
const UsersController = require('./users.controller');
const UsersService = require('./users.service');

const userService = new UsersService(UsersRepository);

module.exports = { UsersController: new UsersController(userService) };

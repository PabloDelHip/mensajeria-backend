const { AuthRepository, UsersRepository } = require('../../schemas');
const AuthController = require('./auth.controller');
const AuthService = require('./auth.service');

const authService = new AuthService(AuthRepository, UsersRepository);

module.exports = { AuthController: new AuthController(authService) };

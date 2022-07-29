const { RolesRepository } = require('../../schemas');
const RolesController = require('./roles.controller');
const RolesService = require('./roles.service');

const roleService = new RolesService(RolesRepository);

module.exports = { RolesController: new RolesController(roleService) };

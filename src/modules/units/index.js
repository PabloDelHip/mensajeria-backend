const { UnitsRepository } = require('../../schemas');
const UnitsController = require('./units.controller');
const UnitsService = require('./units.service');

const unitsService = new UnitsService(UnitsRepository);

module.exports = { UnitsController: new UnitsController(unitsService) };

const { LocationsRepository } = require('../../schemas');
const LocationsController = require('./locations.controller');
const LocationsService = require('./locations.service');

const locationsService = new LocationsService(LocationsRepository);

module.exports = { LocationsController: new LocationsController(locationsService) };

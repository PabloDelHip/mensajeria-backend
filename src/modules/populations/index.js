const {
  MunicipalitiesRepository,
  StatesRepository,
  ColoniesRepository,
} = require('../../schemas');
const PopulationsController = require('./populations.controller');
const PopulationsService = require('./populations.service');

const populationsService = new PopulationsService(
    MunicipalitiesRepository,
    StatesRepository,
    ColoniesRepository,
);

module.exports = { PopulationsController: new PopulationsController(populationsService) };

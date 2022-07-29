const { BranchesRepository } = require('../../schemas');
const BranchesController = require('./branches.controller');
const BranchesService = require('./branches.service');

const branchesService = new BranchesService(BranchesRepository);

module.exports = { BranchesController: new BranchesController(branchesService) };

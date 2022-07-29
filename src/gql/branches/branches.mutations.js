const {
  GraphQLNonNull,
  GraphQLID,
} = require('graphql');
const BrancheDataType = require('./types/branches.type');
const BranchesArgs = require('./args/branches.args');
const BranchesUpdateArgs = require('./args/branchesUpdate.args');
const { BranchesController } = require('../../modules/branches');
const SuccessResponseType = require('../general-types/success.response.type');

module.exports = {
  createBranche: {
    type: BrancheDataType,
    args: BranchesArgs,
    async resolve(parentValues, args) {
      return await BranchesController.createBranche(args);
    },
  },
  updateBranche: {
    type: BrancheDataType,
    args: BranchesUpdateArgs,
    async resolve(parentValues, args) {
      return await BranchesController.updateBranche(args);
    },
  },
  deleteBranche: {
    type: SuccessResponseType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    async resolve(parentValues, args) {
      return await BranchesController.deleteBranche(args);
    },
  },
};

const {
  GraphQLID,
  GraphQLList,
} = require('graphql');
const { BranchesController } = require('../../modules/branches');
const BrancheDataType = require('./types/branches.type');

module.exports = {
  findBranchByIdUser: {
    type: new GraphQLList(BrancheDataType),
    args: { idUser: { type: GraphQLID } },
    async resolve(parentValues, { idUser }) {
      return await BranchesController
          .findBranchByIdUser(idUser);
    },
  },
};

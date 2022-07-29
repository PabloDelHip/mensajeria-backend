const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');
const { RolesController } = require('../../modules/roles');
const RoleDataType = require('./types/role-data.type');
const RoleActionInputType = require('./types/role-action-input.type');
const SuccessResponseType = require('../general-types/success.response.type');

module.exports = {
  createRole: {
    type: RoleDataType,
    args: { name: { type: new GraphQLNonNull(GraphQLString) } },
    async resolve(parentValues, args) {
      const response = await RolesController
          .createRole(args);
      return response;
    },
  },
  updateRole: {
    type: RoleDataType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      read: { type: new GraphQLNonNull(RoleActionInputType) },
      edit: { type: new GraphQLNonNull(RoleActionInputType) },
      create: { type: new GraphQLNonNull(RoleActionInputType) },
      admin: { type: GraphQLBoolean },
      status: { type: GraphQLBoolean },
    },
    async resolve(parentValues, args) {
      return await RolesController.updateRole(args);
    },
  },
  deleteRole: {
    type: SuccessResponseType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    async resolve(parentValues, args) {
      return await RolesController.deleteRole(args);
    },
  },
};

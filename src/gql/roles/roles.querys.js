const {
  GraphQLID,
  GraphQLList,
} = require('graphql');
const { RolesController } = require('../../modules/roles');
const RoleDataPaginateType = require('./types/role-paginate.type');
const RoleDataType = require('./types/role-data.type');

module.exports = {
  listRolesPaginate: {
    type: RoleDataPaginateType,
    async resolve(parentValues, args) {
      const response = await RolesController
          .listRolesPaginate(args);
      return response;
    },
  },
  listRoles: {
    type: new GraphQLList(RoleDataType),
    args: { id: { type: GraphQLID } },
    async resolve(parentValues, args) {
      const response = await RolesController
          .listRoles(args);
      return response;
    },
  },
};

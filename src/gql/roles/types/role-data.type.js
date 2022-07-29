const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');
const moment = require('moment');

const actionRoleType = new GraphQLObjectType({
  name: 'actionRoleType',
  fields: () => ({
    status: { type: GraphQLBoolean },
    listModules: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = new GraphQLObjectType({
  name: 'RoleData',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ _id, id }) {
        return _id || id;
      },
    },
    name: { type: GraphQLString },
    read: { type: actionRoleType },
    edit: { type: actionRoleType },
    create: { type: actionRoleType },
    admin: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    status: { type: GraphQLBoolean },
    createdAt: {
      type: GraphQLString,
      resolve(data) {
        if (!data.createdAt) {
          return null;
        }
        return moment.utc(data.createdAt).format();
      },
    },
    updatedAt: {
      type: GraphQLString,
      resolve(data) {
        if (!data.createdAt) {
          return null;
        }
        return moment.utc(data.createdAt).format();
      },
    },
  }),
});

const {
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'actionRoleInputType',
  fields: () => ({
    status: { type: GraphQLBoolean },
    listModules: { type: new GraphQLList(GraphQLString) },
  }),
});

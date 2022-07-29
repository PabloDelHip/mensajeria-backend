const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'SuccessResponse',
  fields: () => ({
    status: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});

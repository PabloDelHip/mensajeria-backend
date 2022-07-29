const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
} = require('graphql');
const RoleDataType = require('./role-data.type');

module.exports = new GraphQLObjectType({
  name: 'RoleDataPaginate',
  fields: () => ({
    docs: { type: new GraphQLList(RoleDataType) },
    totalDocs: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    totalPages: { type: GraphQLInt },
    page: { type: GraphQLInt },
    pagingCounter: { type: GraphQLInt },
    hasPrevPage: { type: GraphQLBoolean },
    hasNextPage: { type: GraphQLBoolean },
    prevPage: { type: GraphQLInt },
    nextPage: { type: GraphQLInt },
  }),
});

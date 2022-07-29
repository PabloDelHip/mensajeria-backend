const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const schemas = require('./querys');
const mutations = require('./mutations');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { ...schemas },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: { ...mutations },
  }),
});
module.exports = schema;

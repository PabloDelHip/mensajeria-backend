const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const moment = require('moment');

const brancheLocationType = new GraphQLObjectType({
  name: 'BrancheLocationType',
  fields: () => ({
    postal_code: { type: GraphQLString },
    neighborhood: { type: GraphQLString },
    street: { type: GraphQLString },
    outdoor_number: { type: GraphQLString },
    interior_number: { type: GraphQLString },
  }),
});

module.exports = new GraphQLObjectType({
  name: 'BrancheDataType',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ _id, id }) {
        return _id || id;
      },
    },
    razonsocial: { type: GraphQLString },
    rfc: { type: GraphQLString },
    regimen_fiscal: { type: GraphQLString },
    nombre_representante_legal: { type: GraphQLString },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    town: { type: GraphQLString },
    location: { type: brancheLocationType },
    user: { type: GraphQLID },
    manager: { type: GraphQLString },
    phones: { type: new GraphQLList(GraphQLString) },
    emails: { type: new GraphQLList(GraphQLString) },
    lat: { type: GraphQLString },
    long: { type: GraphQLString },
    map_address: { type: GraphQLString },
    comments: { type: GraphQLString },
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

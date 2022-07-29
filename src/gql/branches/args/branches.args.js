const {
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const RegimenFiscalEnum = require('../enum/regimenFiscal.enum');

const locationBranchesDataArgs = new GraphQLInputObjectType({
  name: 'locationBranchesDataArgs',
  fields: () => ({
    postal_code: { type: GraphQLString },
    neighborhood: { type: GraphQLString },
    street: { type: GraphQLString },
    outdoor_number: { type: GraphQLString },
    interior_number: { type: GraphQLString },
  }),
});

module.exports = {
  razonsocial: { type: GraphQLString },
  rfc: { type: GraphQLString },
  regimen_fiscal: { type: RegimenFiscalEnum },
  nombre_representante_legal: { type: GraphQLString },
  country: { type: GraphQLString },
  state: { type: GraphQLString },
  city: { type: GraphQLString },
  town: { type: GraphQLString },
  location: { type: locationBranchesDataArgs },
  user: { type: new GraphQLNonNull(GraphQLID) },
  manager: { type: GraphQLString },
  phones: { type: new GraphQLList(GraphQLString) },
  emails: { type: new GraphQLList(GraphQLString) },
  lat: { type: GraphQLString },
  long: { type: GraphQLString },
  map_address: { type: GraphQLString },
  comments: { type: GraphQLString },
};

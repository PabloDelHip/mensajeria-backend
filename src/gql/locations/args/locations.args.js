const {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = {
  id: { type: GraphQLID },
  alias: { type: new GraphQLNonNull(GraphQLString) },
  name_last_name: { type: new GraphQLNonNull(GraphQLString) },
  street_and_number: { type: new GraphQLNonNull(GraphQLString) },
  cp: { type: new GraphQLNonNull(GraphQLString) },
  country: { type: GraphQLString },
  state: { type: GraphQLString },
  municipalitie: { type: GraphQLString },
  colonie: { type: GraphQLString },
  phone: { type: new GraphQLNonNull(GraphQLString) },
  home_phone: { type: GraphQLString },
  reference: { type: GraphQLString },
  delivery_instructions: { type: GraphQLString },
};

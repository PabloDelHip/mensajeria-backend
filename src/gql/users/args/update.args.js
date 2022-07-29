const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLNonNull,
} = require('graphql');

const TypeClientEnum = new GraphQLEnumType({
  name: 'TypeClientEnum',
  values: {
    CLIENT: { value: 'Client' },
    ADMIN: { value : 'Admin'}
  },
});

module.exports = {
  id: { type: GraphQLID },
  name: { type: GraphQLString },
  last_name: { type: GraphQLString },
  email: { type: GraphQLString },
  phone: { type: GraphQLString },
  password: { type: GraphQLString },
  rfc: { type: GraphQLString },
  country: { type: GraphQLString },
  state: { type: GraphQLString },
  city: { type: GraphQLString },
  municipalitie: { type: GraphQLString },
  role: { type: GraphQLID },
  type_client: { type: GraphQLID },
  type_user: { type: TypeClientEnum },
  razon_social: { type: GraphQLString },
  nombre_representante_legal: { type: GraphQLString },
  regimen_fiscal: { type: GraphQLString },
  status: { type: GraphQLBoolean },
};

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'StatesDataType',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: GraphQLString },
    clave_entidad: { type: GraphQLString },
    nombre_entidad: { type: GraphQLString },
    clave_municipio: { type: GraphQLString },
    nombre_municipio: { type: GraphQLString },
    clave_inegi: { type: GraphQLString },
    nombre_inegi: { type: GraphQLString },
    minx: { type: GraphQLString },
    miny: { type: GraphQLString },
    maxx: { type: GraphQLString },
    maxy: { type: GraphQLString },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  }),
});

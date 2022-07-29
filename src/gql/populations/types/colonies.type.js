const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ColoniesDataType',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: GraphQLString },
    codigo_postal_asentamiento: { type: GraphQLString },
    nombre_asentamiento: { type: GraphQLString },
    tipo_asentamiento: { type: GraphQLString },
    nombre_municipio: { type: GraphQLString },
    nombre_estado: { type: GraphQLString },
    nombre_ciudad: { type: GraphQLString },
    codigo_postal_oficiona: { type: GraphQLString },
    clave_estado: { type: GraphQLString },
    codigo_postal_oficina_: { type: GraphQLString },
    c_cp_vacio: { type: GraphQLString },
    clave_tipo_asentamiento: { type: GraphQLString },
    clave_municipio: { type: GraphQLString },
    identificador_asentamiento: { type: GraphQLString },
    clave_interna_cp_ciudad: { type: GraphQLString },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  }),
});

const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const { PopulationsController } = require('../../modules/populations');
const MunicipalitiesDataType = require('./types/municipalities.type');
const StatesDataType = require('./types/states.type');
const ColoniesDataType = require('./types/colonies.type');

const cpType = new GraphQLObjectType({
  name: 'cpType',
  fields: () => ({ cp: { type: GraphQLString } }),
});

module.exports = {
  getStates: {
    type: new GraphQLList(StatesDataType),
    async resolve(parentValues) {
      return await PopulationsController
          .getStates();
    },
  },
  findMunicipalitiesByClaveEntidad: {
    type: new GraphQLList(MunicipalitiesDataType),
    args: { claveEntidad: { type: new GraphQLNonNull(GraphQLString) } },
    async resolve(parentValues, args) {
      return await PopulationsController
          .findMunicipalitiesByClaveEntidad(args);
    },
  },
  findCPByCvMunicipalitieByCvStates: {
    type: new GraphQLList(cpType),
    args: {
      claveMunicipio: { type: new GraphQLNonNull(GraphQLString) },
      claveEstado: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parentValues, args) {
      return await PopulationsController
          .findCPByCvMunicipalitieByCvStates(args);
    },
  },
  findColoniesByCP: {
    type: new GraphQLList(ColoniesDataType),
    args: { cp: { type: new GraphQLNonNull(GraphQLString) } },
    async resolve(parentValues, args) {
      return await PopulationsController
          .findColoniesByCP(args);
    },
  },
};

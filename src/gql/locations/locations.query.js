// const {
//   GraphQLID,
//   GraphQLNonNull,
// } = require('graphql');
// const LocationDataType = require('./types/location-type');
// const { LocationsController } = require('../../modules/locations');

// module.exports = {
//   getLocationById: {
//     type: new GraphQLList(StatesDataType),
//     args: { id: { type: new GraphQLNonNull(GraphQLID) } },
//     async resolve(parentValues, args) {
//       return await PopulationsController
//           .getLocationById(args);
//     },
//   },
//   findMunicipalitiesByClaveEntidad: {
//     type: new GraphQLList(MunicipalitiesDataType),
//     args: { claveEntidad: { type: new GraphQLNonNull(GraphQLString) } },
//     async resolve(parentValues, args) {
//       return await PopulationsController
//           .findMunicipalitiesByClaveEntidad(args);
//     },
//   },
//   findCPByCvMunicipalitieByCvStates: {
//     type: new GraphQLList(cpType),
//     args: {
//       claveMunicipio: { type: new GraphQLNonNull(GraphQLString) },
//       claveEstado: { type: new GraphQLNonNull(GraphQLString) },
//     },
//     async resolve(parentValues, args) {
//       return await PopulationsController
//           .findCPByCvMunicipalitieByCvStates(args);
//     },
//   },
//   findColoniesByCP: {
//     type: new GraphQLList(ColoniesDataType),
//     args: { cp: { type: new GraphQLNonNull(GraphQLString) } },
//     async resolve(parentValues, args) {
//       return await PopulationsController
//           .findColoniesByCP(args);
//     },
//   },
// };

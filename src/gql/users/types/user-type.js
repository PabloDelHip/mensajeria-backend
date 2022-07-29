const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const moment = require('moment');
const StateType = require('../../populations/types/states.type');
const MunicipalitiesType = require('../../populations/types/municipalities.type');
const LocationType = require('../../locations/types/location-type');
const roleDataType = require('../../roles/types/role-data.type');

module.exports = new GraphQLObjectType({
  name: 'UserDataType',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ _id, id }) {
        return _id || id;
      },
    },
    name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    razon_social: { type: GraphQLString },
    rfc: { type: GraphQLString },
    regimen_fiscal: { type: GraphQLString },
    nombre_representante_legal: { type: GraphQLString },
    branches: { type: new GraphQLList(GraphQLID) },
    country: { type: GraphQLString },
    state: { type: StateType },
    city: { type: GraphQLString },
    municipalitie: { type: MunicipalitiesType },
    location: { type: new GraphQLList(LocationType) },
    role: { type: roleDataType },
    type_client: { type: GraphQLID },
    type_user: { type: GraphQLString },
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

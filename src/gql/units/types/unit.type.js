const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');
// const moment = require('moment');
// const StateType = require('../../populations/types/states.type');
const MunicipalitiesType = require('../../populations/types/municipalities.type');
const UserType = require('../../users/types/user-type');
// const LocationType = require('../../locations/types/location-type');
// const roleDataType = require('../../roles/types/role-data.type');

module.exports = new GraphQLObjectType({
  name: 'UnitDataType',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ _id, id }) {
        return _id || id;
      },
    },
    model: { type: GraphQLString },
    year: { type: GraphQLString },
    license_plates: { type: GraphQLString },
    serial_number: { type: GraphQLString },
    capacity: { type: GraphQLInt },
    mileage: { type: GraphQLInt },
    in_services: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    location: { type: MunicipalitiesType },
    driver: { type: UserType },
    policy: { type: GraphQLString },
    last_maintenance: {
      type: GraphQLString,
      resolve(data) {
        if (!data.createdAt) {
          return null;
        }
        return moment.utc(data.createdAt).format();
      },
    },
    estimated_maintenance: {
      type: GraphQLString,
      resolve(data) {
        if (!data.createdAt) {
          return null;
        }
        return moment.utc(data.createdAt).format();
      },
    },
    additional_information: { type: GraphQLString },
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

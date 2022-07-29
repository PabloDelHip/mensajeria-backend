const {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
const moment = require('moment');
const StateType = require('../../populations/types/states.type');
const MunicipalitiesType = require('../../populations/types/municipalities.type');
const ColoniesType = require('../../populations/types/colonies.type');

module.exports = new GraphQLObjectType({
  name: 'LocationDataType',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ _id, id }) {
        return _id || id;
      },
    },
    alias: { type: GraphQLString },
    name_last_name: { type: GraphQLString },
    street_and_number: { type: GraphQLString },
    cp: { type: GraphQLString },
    country: { type: GraphQLString },
    state: { type: StateType },
    municipalitie: { type: MunicipalitiesType },
    colonie: { type: ColoniesType },
    phone: { type: GraphQLString },
    home_phone: { type: GraphQLString },
    reference: { type: GraphQLString },
    delivery_instructions: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    default: { type: GraphQLBoolean },
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

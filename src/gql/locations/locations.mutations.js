const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');
const LocationDataType = require('./types/location-type');
const LocationArgs = require('./args/locations.args');
const { LocationsController } = require('../../modules/locations');
const SuccessResponseType = require('../general-types/success.response.type');

module.exports = {
  createLocation: {
    type: LocationDataType,
    args: LocationArgs,
    async resolve(parentValues, args, { user }) {
      return await LocationsController.createLocation(args, user);
    },
  },
  updateLocation: {
    type: LocationDataType,
    args: LocationArgs,
    async resolve(parentValues, args) {
      return await LocationsController.updateLocation(args);
    },
  },
  setAsDefault: {
    type: SuccessResponseType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    async resolve(parentValues, args, { user }) {
      return await LocationsController.setAsDefault(args, user);
    },
  },
  removeLocation: {
    type: SuccessResponseType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    async resolve(parentValues, args, { user }) {
      return await LocationsController.removeLocation(args, user);
    },
  },
};

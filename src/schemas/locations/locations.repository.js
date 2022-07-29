const { Database } = require('../../support');
const ErrorFactory = require('../../support/errors/error.factory.js');
const { LocationsSchema } = require('./locations.schema');
const { UsersSchema } = require('../users/users.schema');
/**
 *
 *
 * @param {*} params params location
 * @param {*} userId user id
 * @return {*} return data location
 */
async function createLocation(params, userId) {
  try {
    const Location = Database.getModel('locations', LocationsSchema);
    const User = Database.getModel('users', UsersSchema);
    const locationResponse = await Location.create(params);
    await User.findOneAndUpdate(
        { _id: userId },
        { $push: { location: locationResponse._id } },
    );
    return locationResponse;
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}
/**
 *
 *
 * @param {*} { id, ...params } id location and params
 * @return {*} return new data location
 */
async function updateLocation({ id, ...params }) {
  try {
    console.log('mi id', id, params)
    const Location = Database.getModel('locations', LocationsSchema);
    return await Location.findOneAndUpdate(
        { _id: id },
        params,
        { new: true },
    );
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}
/**
 *
 *
 * @param {*} { id } id location
 * @param {*} userId user id
 */
async function removeLocation({ id }, userId) {
  try {
    const Location = Database.getModel('locations', LocationsSchema);
    const User = Database.getModel('users', UsersSchema);
    await Location.findOneAndUpdate(
        { _id: id },
        { status: false },
        { new: true },
    );
    await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { location: id } },
    );
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}


/**
 * find Location Default Active
 *
 * @param {*} userId user id
 * @return {*} id location active
 */
async function findLocationDefaultActive(userId) {
  try {
    const User = Database.getModel('users', UsersSchema);
    const { location } = await User.findOne({ _id: userId })
        .populate({
          path: 'location',
          match: { default: true },
          select: '_id',
        });
        console.log('la locacion', location);
        console.log('el usuario')
    return location.length ? location[0]._id : '';
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}

module.exports = {
  createLocation,
  updateLocation,
  removeLocation,
  findLocationDefaultActive,
};

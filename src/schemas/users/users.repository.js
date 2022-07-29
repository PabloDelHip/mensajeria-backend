/* eslint-disable new-cap */
const mongoose = require('mongoose');
const { Database } = require('../../support');
const ErrorFactory = require('../../support/errors/error.factory.js');
const { UserSchema } = require('./users.schema');
const { clearHash } = require('../../../cache');

/**
   * create user
   * @param {Object} userData Data user
   * @return {Promise} Messages
   */
function create(userData) {
  return new Promise((resolve, reject) => {
    const userSchema = Database.getModel('users', UserSchema);
    userSchema.create(userData)
        .then((user) => {
          clearHash('listUsers');
          return resolve(user);
        })
        .catch((err) => {
          if (err.code === 11000) {
            return reject(ErrorFactory.conflictError(`Duplicate entry for ${Object.keys(err.errors)[0]}`).toJSON());
          }
          return reject(ErrorFactory.conflictError(`Duplicate entry for ${Object.keys(err.errors)[0]}`).toJSON());
        });
  });
}

/**
  *Change password
  * @param {String} id user id
  * @param {String} password new password
  * @return {Promise} data user
  */
function changePassword({ id, password }) {
  return new Promise((resolve, reject) => {
    const userdSchema = Database.getModel('users', UserSchema);
    userdSchema.findOneAndUpdate(
        { _id: id },
        { password: password },
    )
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

/**
    *Update user in DB
   * @param {Object} params user data
   * @return {Promise} config
   * @memberof UsersController
   */
async function updateUsers(params) {
  const criteria = await Database.validateCriteria({ id: params.id });
  delete params.id;
  try {
    const users = Database.getModel('users', UserSchema);
    return await users.findOneAndUpdate(criteria, params, { new: true });
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}

async function createUsers(params) { 
  console.log('vamos a crear un nuevo usuario', params);
}

/**
 *
 *
 * @param {*} { id } user id
 * @return {*} return data user
 */
async function findUserById({ id }) {
  try {
    const Users = Database.getModel('users', UserSchema);
    const usersData = await Users.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'states',
          localField: 'state',
          foreignField: 'clave_entidad',
          as: 'state',
        },
      },
      {
        $lookup: {
          from: 'municipalities',
          localField: 'municipalitie',
          foreignField: 'id',
          as: 'municipalitie',
        },
      },
      // {
      //   $lookup: {
      //     from: 'roles',
      //     localField: 'role',
      //     foreignField: 'id',
      //     as: 'municipalitie',
      //   },
      // },
    ]);
    const response = await Users.populate(usersData, {
      path: 'location',
      options: { sort: { default: -1 } },
      populate: [
        { path: 'municipalitie' },
        { path: 'state' },
        { path: 'colonie' },
      ],
    });
    return response[0];
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}

async function listUsers() {
  try {
    const Users = Database.getModel('users', UserSchema);
    const usersData = await Users.aggregate([
      { $match: { type_user: { $ne: 'Client' } } },
      {
        $lookup: {
          from: 'states',
          localField: 'state',
          foreignField: 'clave_entidad',
          as: 'state',
        },
      },
      {
        $lookup: {
          from: 'municipalities',
          localField: 'municipalitie',
          foreignField: 'id',
          as: 'municipalitie',
        },
      },
    ]).cache({ key: 'listUsers' });
    const response = await Users.populate(usersData, {
      path: 'role',
    });
    return response;
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}

module.exports = {
  create,
  changePassword,
  updateUsers,
  findUserById,
  listUsers,
  createUsers,
};

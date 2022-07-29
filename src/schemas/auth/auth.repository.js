const { Database } = require('../../support');
const ErrorFactory = require('../../support/errors/error.factory.js');
const { UserSchema } = require('../users/users.schema');
const { RolesSchema } = require('../roles/roles.schema');
const { recoverPasswordSchema } = require('./recover-password.schema');

/**
   * Find User by email
   * @param {Object} email email user
   * @return {Promise} User
   */
function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const userSchema = Database.getModel('users', UserSchema);
    const rolesSchema = Database.getModel('roles', RolesSchema);
    userSchema.findOne({ email })
        .populate('roles')
        .then( async(user) => {
          if (user) {
            const role = await rolesSchema.findOne({ _id: user.role }).lean();
            const data = { ...user._doc };
            data.role = role;
            resolve(data);
          }
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

/**
   * Add token recover password
   * @param {Object} params data token
   * @return {Promise} token
   */
function addRecoverPassword(params) {
  return new Promise((resolve, reject) => {
    const recoverPassword = Database.getModel('recoverPassword', recoverPasswordSchema);
    recoverPassword.create(params)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

/**
   * Validate token password
   * @param {String} token token
   * @return {Promise} token
   */
function validateTokenPassword({ token }) {
  return new Promise((resolve, reject) => {
    const recoverPassword = Database.getModel('recoverPassword', recoverPasswordSchema);
    recoverPassword.findOne({
      _id: token,
      passwordChanged: false,
      expirationDate: { $gte: new Date() },
    })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

/**
   * Change password
   * @param {String} token token
   * @return {Promise} token
   */
function changePassword(token) {
  return new Promise((resolve, reject) => {
    const recoverPassword = Database.getModel('recoverPassword', recoverPasswordSchema);
    recoverPassword.findOneAndUpdate({
      _id: token,
      passwordChanged: false,
      expirationDate: { $gte: new Date() },
    }, { passwordChanged: true })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

module.exports = {
  findByEmail,
  addRecoverPassword,
  changePassword,
  validateTokenPassword,
};

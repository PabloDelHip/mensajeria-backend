const { Database } = require('../../support');
const ErrorFactory = require('../../support/errors/error.factory.js');
const { RolesSchema } = require('./roles.schema');

/**
   * create role
   * @param {Object} params Data role
   * @return {Promise} New role
   */
function createRole(params) {
  return new Promise((resolve, reject) => {
    const roles = Database.getModel('roles', RolesSchema);
    roles.create(params)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(ErrorFactory.queryError(err.message).toJSON());
        });
  });
}

/**
   * create role
   * @param {Object} params Data role
   * @return {Promise} update role
   */
async function updateRole(params) {
  const criteria = await Database.validateCriteria({ id: params.id });
  try {
    const roles = Database.getModel('roles', RolesSchema);
    return await roles.findOneAndUpdate(criteria, params, { new: true });
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}

/**
   * create role
   * @param {Object} params Data role
   * @return {Promise} role
   */
async function deleteRole(params) {
  const criteria = await Database.validateCriteria(params);
  try {
    const roles = Database.getModel('roles', RolesSchema);
    return await roles.findOneAndDelete(criteria);
  } catch (err) {
    throw ErrorFactory.queryError(err.message).toJSON();
  }
}
/**
   * listRolesPaginate
   * @param {Object} params data filter
   * @return {Promise} Roles
   */
async function listRolesPaginate(params) {
  try {
    const roles = Database.getModel('roles', RolesSchema);
    return await roles.paginate();
  } catch (error) {
    return ErrorFactory.queryError(err.message).toJSON();
  }
}

/**
   * listRolesPaginate
   * @param {Object} params data filter
   * @return {Promise} Roles
   */
async function listRoles(params) {
  try {
    const criteria = await Database.validateCriteria(params);
    const roles = Database.getModel('roles', RolesSchema);
    return await roles.find(criteria);
  } catch (error) {
    return ErrorFactory.queryError(err.message).toJSON();
  }
}

module.exports = {
  createRole,
  listRolesPaginate,
  listRoles,
  updateRole,
  deleteRole,
};

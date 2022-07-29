/**
 *
 *
 * @class RoleController
 */
class RoleController {
  /**
   * Creates an instance of RoleController.
   * @param {Object} RoleService roles service
   * @memberof RoleController
   */
  constructor(RoleService) {
    this.RoleService = RoleService;
  }
  /**
 *
 *
 * @param {Object} params role data
 * @return {Promise} role
 * @memberof RoleController
 */
  createRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleService
          .createRole(params)
          .then((response) => resolve(response))
          .catch((error) => {
            return reject(error);
          });
    });
  }

  /**
 *
 *
 * @param {Object} params role data
 * @return {Promise} role
 * @memberof RoleController
 */
  updateRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleService
          .updateRole(params)
          .then((response) => resolve(response))
          .catch((error) => {
            return reject(error);
          });
    });
  }

  /**
 *
 *
 * @param {Object} params id role
 * @return {Promise} message
 * @memberof RoleController
 */
  deleteRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleService
          .deleteRole(params)
          .then(() => resolve({ status: true, message: 'role removed successfully' }))
          .catch((error) => {
            return reject(error);
          });
    });
  }
  /**
 *
 *
 * @param {Object} params data paginate
 * @return {Promise} roles
 * @memberof RoleController
 */
  listRolesPaginate(params) {
    return new Promise((resolve, reject) => {
      this.RoleService
          .listRolesPaginate(params)
          .then((response) => resolve(response))
          .catch((error) => {
            return reject(error);
          });
    });
  }
  /**
 *
 *
 * @param {Object} params data filter
 * @return {Promise} roles
 * @memberof RoleController
 */
  listRoles(params) {
    return new Promise((resolve, reject) => {
      this.RoleService
          .listRoles(params)
          .then((response) => resolve(response))
          .catch((error) => {
            return reject(error);
          });
    });
  }
}

module.exports = RoleController;

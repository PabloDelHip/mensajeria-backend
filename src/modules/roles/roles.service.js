/**
 * @class RolesService
 */
class RolesService {
  /**
   * Repositories
   * @Injectable
   * @param {Object} RoleRepository Role repository
   */
  constructor(RoleRepository) {
    this.RoleRepository = RoleRepository;
  }
  /**
 *
 *
 * @param {*} params data role
 * @return {Promise} role
 * @memberof RolesService
 */
  createRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleRepository
          .createRole(params)
          .then((response) => resolve(response))
          .catch((err) => reject(err.data));
    });
  }
  /**
 *
 *
 * @param {*} params data role
 * @return {Promise} role
 * @memberof RolesService
 */
  updateRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleRepository
          .updateRole(params)
          .then((response) => resolve(response))
          .catch((error) => {
            return reject(error.data);
          });
    });
  }
  /**
 *
 *
 * @param {*} params id role delete
 * @return {Promise} role
 * @memberof RolesService
 */
  deleteRole(params) {
    return new Promise((resolve, reject) => {
      this.RoleRepository
          .deleteRole(params)
          .then((response) => resolve(response))
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
      this.RoleRepository
          .listRolesPaginate(params)
          .then((response) => resolve(response))
          .catch((err) => reject(err.data));
    });
  }
  /**
 *
 *
 * @param {Object} params data filter
 * @return {Promise} roles
 * @memberof RoleController
 */
  async listRoles(params) {

    return new Promise((resolve, reject) => {
      this.RoleRepository
          .listRoles(params)
          .then((response) => {
            // client.set('ListRoles', JSON.stringify(response));
            resolve(response)
          })
          .catch((err) => reject(err.data));
    });
  }
}

module.exports = RolesService;

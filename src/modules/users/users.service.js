/**
 * @class AuthController
 */
class UsersService {
  /**
     * Repositories
     * @Injectable
     * @param {Object} UsersRepository Users repository
     */
  constructor(UsersRepository) {
    this.UsersRepository = UsersRepository;
  }

  /**
 * @param {Object} requestData data user
 * @return {Promise} config
 * @memberof UsersService
 */
  create(requestData) {
    return new Promise((resolve, reject) => {
      this.UsersRepository
          .create(requestData)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
    });
  }

  /**
    *Update user in DB
   * @param {Object} params user data
   * @return {Promise} config
   * @memberof UsersService
   **/
  async updateUsers(params) {
    try {
      return await this.UsersRepository.updateUsers(params);
    } catch (error) {
      return error;
    }
  }

  async createUsers(params) {
    try {
      return await this.UsersRepository.create(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params id user
 * @return {*} return data user
 * @memberof UsersService
 * */
  async findUserById(params) {
    try {
      const userData = await this.UsersRepository.findUserById(params);
      userData.state = userData.state[0];
      userData.municipalitie = userData.municipalitie[0];
      return userData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listUsers() {
    try {
      const userData = await this.UsersRepository.listUsers();
      const dataResponse = userData.map(({ state, municipalitie, ...params }) => ({
        state: state[0],
        municipalitie: municipalitie[0],
        ...params
      }));
      return dataResponse;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersService;

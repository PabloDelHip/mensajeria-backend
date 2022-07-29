const { ObjectParser } = require('../../support');
const bcrypt = require('bcryptjs');
const validateRfc = require('validate-rfc');
/**
 *
 *
 * @class UsersController
 */
class UsersController {
  /**
   * Creates an instance of UsersController.
   * @param {Object} UsersService User service
   * @memberof UsersController
   */
  constructor(UsersService) {
    this.UsersServices = UsersService;
  }
  /**
    *Create user in DB
   * @param {Object} requestData user data
   * @return {Promise} config
   * @memberof UsersController
   */
  async create(requestData) {
    // validar si el correo existe
    const salt = bcrypt.genSaltSync();
    requestData.password = bcrypt.hashSync(requestData.password, salt);
    return new Promise((resolve, reject) => {
      this.UsersServices
          .create(requestData)
          .then((response) => {
            return resolve(ObjectParser.responseOf(201, response));
          })
          .catch((error) => {
            return reject(error);
          });
    });
  }

  /**
 *
 *
 * @param {*} password password user
 * @return {*}  password encrypt
 * @memberof UsersController
 */
   async encryptPassword(password) {
    const salt = bcrypt.genSaltSync();
    return await bcrypt.hashSync(password, salt);
  }

  /**
    *Update user in DB
   * @param {Object} params user data
   * @return {Promise} config
   * @memberof UsersController
   */
  async updateUsers(params) {
    try {
      if(params.rfc) {
        const rfc = await validateRfc(params.rfc);
        if (!rfc.isValid) throw new Error('Error reading the RFC');
      }
      if (params.password) params.password = await this.encryptPassword(params.password);
      else delete params.password;
      return await this.UsersServices.updateUsers(params);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUsers(params) {
    try {
      if(params.rfc) {
        const rfc = await validateRfc(params.rfc);
        if (!rfc.isValid) throw new Error('Error reading the RFC');
      }
      console.log('MIS PARA', params);
      params.password = await this.encryptPassword(params.password);
      return await this.UsersServices.createUsers(params);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
 *
 *
 * @param {*} params id user
 * @return {*} return data user
 * @memberof UsersController
 */
  async findUserById(params) {
    try {
      return await this.UsersServices.findUserById(params);
    } catch (error) {
      throw new Error(error);
    }
  }

  async listUsers() {
    try {
      return await this.UsersServices.listUsers();
    } catch (error) {
      throw new Error(error);
    }
  }

  async funcion() {
    console.log('MI FUNCION');
  }
}

module.exports = UsersController;

const bcrypt = require('bcryptjs');
const { ObjectParser, Emails } = require('../../support');
/**
 *
 *
 * @class AuthController
 */
class AuthController {
  /**
   * Creates an instance of AuthController.
   * @param {*} AuthService Auth Service
   * @memberof AuthController
   */
  constructor(AuthService) {
    this.AuthServices = AuthService;
  }
  /**
  *Login by email
  * @param {Object} data data user
  * @param {Object} origin origin login
  * @return {Promise} data user
  * @memberof AuthController
  */
  loginByEmail(data, origin) {
    return new Promise((resolve, reject) => {
      this.AuthServices
          .loginByEmail(data, origin)
          .then((response) => {
            return resolve(ObjectParser.responseOf(200, response));
          })
          .catch((error) => {
            return reject(error);
          });
    });
  }

  /**
 *
 * validate mail and send email with token to recover password
 * @param {Object} data data user
 * @return {Promise} response
 * @memberof AuthController
 */
  recoverPassword(data) {
    return new Promise((resolve, reject) => {
      this.AuthServices
          .recoverPassword(data)
          .then(async(response) => {
            const { status, message } = await Emails.sendEmail(response, 'recover-password', 'texto tipo email');
            if (status === 200) {
              return resolve(ObjectParser.responseOf(200, { message }));
            } else {
              return resolve(ObjectParser.responseOf(500, { message }));
            }
          })
          .catch((error) => {
            return reject(error);
          });
    });
  }
  /**
 *
 *Validate token password
 * @param {Object} params token
 * @return {Promise} response
 * @memberof AuthController
 */
  validateTokenPassword(params) {
    return new Promise((resolve, reject) => {
      this.AuthServices
          .validateTokenPassword(params)
          .then((response) => resolve(ObjectParser.responseOf(200, response)))
          .catch((error) => {
            return reject(error);
          });
    });
  }

  /**
  *Change password
  * @param {Object} params token and password
  * @return {Promise} response
  * @memberof AuthController
  */
  changePassword(params) {
    const salt = bcrypt.genSaltSync();
    params.password = bcrypt.hashSync(params.password, salt);
    return new Promise((resolve, reject) => {
      this.AuthServices
          .changePassword(params)
          .then((response) => {
            return resolve(ObjectParser.responseOf(200, response));
          })
          .catch((error) => {
            return reject(error);
          });
    });
  }
}

module.exports = AuthController;

const bcrypt = require('bcryptjs');
const ErrorFactory = require('../../support/errors/error.factory.js');
const {
  Validator,
  Constants,
  JWT,
} = require('../../support');

/**
 * @class AuthService
 */
class AuthService {
  /**
     * Repositories
     * @Injectable
     * @param {Object} AuthRepository Auth repository
     * @param {Object} UsersRepository User repository
     */
  constructor(AuthRepository, UsersRepository) {
    this.AuthRepository = AuthRepository;
    this.UsersRepository = UsersRepository;
  }

  /**
  *Login by email
  * @param {Object} requestData data user
  * @param {Object} origin origin by login
  * @return {Promise} data user
  * @memberof AuthController
  */
  loginByEmail(requestData, origin) {
    const { email, password } = requestData;
    const _user = {};
    return new Promise((resolve, reject) => {
      this.AuthRepository
          .findByEmail(email)
          .then(((userData) => {
            if (process.env.LOGIN_ADMIN_CLIENT_URL === origin) {
              if (!Constants.TYPE_USERS_CLIENT.includes(userData.type_user)) {
                console.log('AHORA PASAMOS AQUI', userData.type_user);
                return Validator.isNull(null, 'notfoundError', Constants.ERROR_MESSAGES._EMAIL_NOT_FOUND(email));
              }
              console.log('userData', userData);
            }
            console.log('mi origen', userData);
            // else if (userData.type_user.includes(Constants.TYPE_USERS_CLIENT)) {
            //   console.log('userData', userData);
            //   return Validator.isNull(null, 'notfoundError', Constants.ERROR_MESSAGES._EMAIL_NOT_FOUND(email));
            // }
            return userData;
          }))
          .then((user) => Object.assign(_user, user))
          .then((user) => this.__comparePassword(password, user.password))
          .then(() => this.__userTokenParam(_user))
          .then((token) => {
            console.log('llegamos al token')
            delete _user.password;
            resolve({ token });
          })
          .catch((err) => reject(err));
    });
  }

  /**
  *Validate token password
  * @param {Object} params token
  * @return {Promise} data token
  * @memberof AuthController
  */
  validateTokenPassword(params) {
    return new Promise((resolve, reject) => {
      this.AuthRepository
          .validateTokenPassword(params)
          .then((responseData) =>
            Validator.isNull(responseData, 'notfoundError', Constants.ERROR_MESSAGES._TOKEN_PASSWORD_NOT_WORKING))
          .then((response) => resolve(response))
          .catch((err) => reject(err));
    });
  }

  /**
  *Validate token password
  * @param {String} email object
  * @return {Promise} data token
  * @memberof AuthController
  */
  recoverPassword({ email }) {
    return new Promise((resolve, reject) => {
      this.AuthRepository
          .findByEmail(email)
          .then((userData) => Validator.isNull(userData, 'notfoundError', Constants.ERROR_MESSAGES._EMAIL_NOT_FOUND(email)))
          .then(({ _id }) => {
            const expirationDate = new Date().setSeconds(86400);
            const params = { userId: _id, expirationDate };
            return this.AuthRepository.addRecoverPassword(params);
          })
          .then((response) => ({ idToken: response._id, email }))
          .then((user) => resolve(user))
          .catch((err) => reject(err));
    });
  }

  /**
  *Change password
  * @param {String} email object
  * @param {String} password object
  * @return {Promise} data token
  * @memberof AuthController
  */
  changePassword({ token, password }) {
    return new Promise((resolve, reject) => {
      this.AuthRepository
          .changePassword(token)
          .then((response) => Validator.isNull(response, 'notfoundError', Constants.ERROR_MESSAGES._TOKEN_PASSWORD_NOT_WORKING))
          .then((response) => {
            const params = {
              id: response.userId,
              password: password,
            };
            return this.UsersRepository.changePassword(params);
          })
          .then((user) => {
            delete user.password;
            resolve(user);
          })
          .catch((err) => reject(err));
    });
  }


  /**
   * Compare password whit passwordHash
   * @param {String} password Password
   * @param {String} passwordHash PasswordHash to compare
   * @return {Promise} Config
   * @memberof AuthService
   */
  __comparePassword(password, passwordHash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash)
          .then((match) => {
            if (!match) return reject(ErrorFactory.unauthorizedError(Constants.ERROR_MESSAGES.LOGIN_ERROR).toJSON());
            return resolve();
          });
    });
  }

  /**
   * parse user to token params
   * @param {Object} _id user data
   * @param {String} email eventId
   * @return {Object} token params
   */
  __userTokenParam({
    _id, name, last_name: lastName, email, role, ...data
  }) {
    const userToken = {
      user_name: `${name} ${lastName}`,
      user_id: _id,
      user_email: email,
      user_role: role,
    };
    return JWT.generateToken(userToken);
  }
}

module.exports = AuthService;


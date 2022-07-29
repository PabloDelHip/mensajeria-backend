const ErrorFactory = require('../support/errors/error.factory.js');
const jwt = require('jsonwebtoken');
const { Logger } = require('../support');
/**
 * Decode JWT tokens.
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @param {Function} next Express function next
 * @return {void}
 */
async function decodeJWT(req, res, next) {
  const nonSecurePaths = ['auth'];
  const nonSecureUrls = ['/users/create', '/create'];
  if (nonSecureUrls.includes(req.path)) return next();
  if (nonSecurePaths.includes(req.path.split('/')[1])) return next();
  let token = req.get('Authorization');
  if (typeof token === 'undefined') {
    return res.status(401).json(ErrorFactory.unauthorizedError('Unauthorized').toJSONResponse());
  }
  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res
          .status(401)
          .json(ErrorFactory.unauthorizedError('Unauthorized').toJSONResponse());
    }
    req.auth = decoded.payload;
    Logger.debug(`Token payload : ${JSON.stringify(req.auth)}`);
    return next();
  });
}


/**
 * Decode JWT tokens.
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @param {Function} next Express function next
 * @return {void}
 */
async function decodeShortJWT(req, res, next) {
  let token = req.get('Authorization');
  if (typeof token === 'undefined') {
    return res.status(401).json(ErrorFactory.unauthorizedError('Unauthorized').toJSONResponse());
  }
  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SHORT_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res
          .status(401)
          .json(ErrorFactory.unauthorizedError('Unauthorized').toJSONResponse());
    }
    req.auth = decoded.payload;
    return next();
  });
}


module.exports = { decodeJWT, decodeShortJWT };

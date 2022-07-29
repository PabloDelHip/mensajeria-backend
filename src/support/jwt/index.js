
const jwt = require('jsonwebtoken');

/**
 * Generates new token
 * @param {Object} payload The payload to sign
 * @return {String} Token
 */
function generateToken(payload) {
  return jwt.sign({ payload }, process.env.JWT_SECRET_TOKEN, { expiresIn: process.env.JWT_EXPIRATION_TIME });
}

module.exports = { generateToken };

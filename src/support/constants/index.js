const environment = require('./environment');
const errorMessages = require('./error.messages.js');
module.exports = {
  ...environment,
  ERROR_MESSAGES: errorMessages,
  TYPE_USERS_CLIENT: ['Client'],
};

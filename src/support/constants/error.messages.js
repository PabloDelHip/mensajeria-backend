
module.exports = {
  CAST_OR_PARSE_VALUE: 'Unable to cast or parse value',
  _RESOURCE_NOT_FOUND: (resource) => `The ${resource} won't found in the system`,
  UNEXPECTED_FILE_FIELD: (field) => `Unexpected field ${field} while uploading files`,
  _EMAIL_NOT_FOUND: (email) => `The email ${email} is not registered on our system yet`,
  GOOGLE_ACCOUNT_NOT_FOUND: 'Google account not found',
  LOGIN_ERROR: 'Wrong email or password.',
  _TOKEN_PASSWORD_NOT_WORKING: 'the token is no longer enabled',
  _RESET_PASSWORD_MAIL_SEND: (target) => `The mail to ${target} couldn't send.`,
  DEFAULTS: { SERVER_ERROR: 'Internal sever error.' },
};

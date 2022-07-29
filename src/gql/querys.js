const roles = require('./roles/roles.querys');
const users = require('./users/users.querys');
const branches = require('./branches/branches.querys');
const populations = require('./populations/populations.query');
const locations = require('./locations/locations.query');

module.exports = {
  ...roles,
  ...users,
  ...branches,
  ...populations,
  ...locations,
};

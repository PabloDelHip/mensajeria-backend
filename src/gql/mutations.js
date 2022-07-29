const roles = require('./roles/roles.mutations');
const users = require('./users/users.mutation');
const branches = require('./branches/branches.mutations');
const locations = require('./locations/locations.mutations');

module.exports = {
  ...roles,
  ...users,
  ...branches,
  ...locations,
};

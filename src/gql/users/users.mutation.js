const UserDataType = require('./types/user-type');
const UpdateUserArgs = require('./args/update.args');
const { UsersController } = require('../../modules/users');

module.exports = {
  updateUser: {
    type: UserDataType,
    args: UpdateUserArgs,
    async resolve(parentValues, args) {
      return await UsersController.updateUsers(args);
    },
  },
  createUser: {
    type: UserDataType,
    args: UpdateUserArgs,
    async resolve(parentValues, args) {
      return await UsersController.createUsers(args);
    },
  },
};

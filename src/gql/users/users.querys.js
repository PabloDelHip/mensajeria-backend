const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql');
const { UsersController } = require('../../modules/users');
const UserType = require('./types/user-type');

module.exports = {
  listUsers: {
    type: new GraphQLList(UserType),
    async resolve(parentValues, args) {
      const response = await UsersController
          .listUsers();
      return response;
    },
  },
  findUserById: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    async resolve(parentValues, args) {
      const response = await UsersController
          .findUserById(args);
      return response;
    },
  },
};

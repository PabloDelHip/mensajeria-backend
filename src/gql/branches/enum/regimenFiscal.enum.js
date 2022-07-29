const { GraphQLEnumType } = require('graphql');


module.exports = new GraphQLEnumType({
  name: 'RegimenFiscalEnum',
  values: {
    FISICA: { value: 'Fisica' },
    MORAL: { value: 'Moral' },
  },
});

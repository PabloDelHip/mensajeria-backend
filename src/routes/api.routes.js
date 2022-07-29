/* eslint-disable new-cap */
const { JwtMiddleware } = require('../middlewares');
const router = require('express').Router();
const UsersResource = require('../modules/users/users.resource');
const AuthResource = require('../modules/auth/auth.resource');
const RoleResource = require('../modules/roles/roles.resource');

router.use('/auth', AuthResource);
router.use('/users', [JwtMiddleware.decodeJWT], UsersResource);
router.use('/roles', [JwtMiddleware.decodeJWT], RoleResource);

module.exports = router;

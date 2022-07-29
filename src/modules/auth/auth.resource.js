/* eslint-disable new-cap */
const router = require('express').Router();
const { AuthController } = require('./index');
const { RequestValidation } = require('../../support');
const {
  AuthDto,
  RecoverPasswordDto,
  ChangePasswordDto,
  ValidateTokenPasswordDto,
} = require('./dto');

router.post('/login', (req, res) => {
  const requestData = RequestValidation.validateRequest(AuthDto, req.body);
  if (requestData.error) return res.status(422).json(requestData);
  console.log('tenemosd header', req.headers);
  AuthController
      .loginByEmail(requestData, req.headers.origin)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

router.post('/recover-password', (req, res) => {
  const requestData = RequestValidation.validateRequest(RecoverPasswordDto, req.body);
  if (requestData.error) return res.status(422).json(requestData);
  AuthController
      .recoverPassword(requestData)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

router.get('/validate-token-password/:token', (req, res) => {
  const requestData = RequestValidation.validateRequest(ValidateTokenPasswordDto, req.params);
  if (requestData.error) return res.status(422).json(requestData);
  AuthController
      .validateTokenPassword(requestData)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

router.post('/change-password/:token', (req, res) => {
  const requestData = RequestValidation.fullValidate(ChangePasswordDto, req);
  if (requestData.error) return res.status(422).json(requestData);
  const params = {
    token: requestData.paramsData().token,
    password: requestData.bodyData().password,
  };
  AuthController
      .changePassword(params)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

module.exports = router;

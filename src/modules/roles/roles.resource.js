/* eslint-disable new-cap */
const router = require('express').Router();
const { RolesController } = require('./index');
const { RequestValidation } = require('../../support');
const { RoleDto } = require('./dto');

router.post('/create', (req, res) => {
  const requestData = RequestValidation.validateRequest(RoleDto, req.body);
  if (requestData.error) return res.status(422).json(requestData);
  RolesController
      .createRole(requestData)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

module.exports = router;

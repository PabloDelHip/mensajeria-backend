/* eslint-disable new-cap */
const router = require('express').Router();
const { UsersController } = require('./index');
const { UserDto } = require('./dto');
const { RequestValidation } = require('../../support');

router.get('/:id', (req, res) => {
  res.status(200).json({ ok: true });
  /* RoomsController
        .getAllMessages()
        .then(({ status = 200, data = {} }) => { return res.status(status).json(data); })
        .catch(({ status = 500, error = {} }) => res.status(status).json(error)); */
});

router.get('/users', (req, res) => {
  res.status(200).json({ ok: true });
  /* RoomsController
        .getAllMessages()
        .then(({ status = 200, data = {} }) => { return res.status(status).json(data); })
        .catch(({ status = 500, error = {} }) => res.status(status).json(error)); */
});

router.post('/create', (req, res) => {
  const requestData = RequestValidation.validateRequest(UserDto, req.body);
  if (requestData.error) return res.status(422).json(requestData);
  UsersController
      .create(requestData)
      .then(({ status = 200, data = {} }) => {
        return res.status(status).json(data);
      })
      .catch(({ status = 500, data = {} }) => res.status(status).json(data));
});

module.exports = router;

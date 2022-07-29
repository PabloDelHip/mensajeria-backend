const { Logger } = require('./src/support');

exports.requestTracer = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  Logger.debug(`${req.method} request from ${ip} to ${req.originalUrl}`);
  Logger.debug(`with payload ${JSON.stringify(req.body)}`);
  Logger.debug(`with params ${JSON.stringify(req.params)}`);
  Logger.debug(`with query params ${JSON.stringify(req.query)}`);
  return next();
};

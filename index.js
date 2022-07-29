require('dotenv').config();
const express = require('express');
const appSocket = express();
const App = require('./http-server.js');
const router = require('./src/routes');
require('./cache');
const port = process.env.PORT;
const port_socket = process.env.PORT_SOCKET;
const app = new App(router, port, port_socket);
if (process.env.NODE_ENV !== 'test') {
  const server = app.listen();
}
module.exports = app;
// console.log('somos ser', server.instans.server.close());
/* module.exports = {
  app: app.app,
  server: server.instans.server
}; */

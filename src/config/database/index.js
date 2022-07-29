const mongoose = require('mongoose');
const { getDatabaseConfig } = require('./database.config.js');

const options = getDatabaseConfig();
const connect = mongoose.createConnection(process.env.MONGO_URL, options);
module.exports = connect;

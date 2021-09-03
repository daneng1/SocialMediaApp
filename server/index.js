'use strict';
require('dotenv').config();

const server = require('./server.js');
const PORT = process.env.PORT || 8080;

server.start(PORT);

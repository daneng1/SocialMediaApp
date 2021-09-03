'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const posts = require('./routes')

app.use(express.json());
app.use(cors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`up on ${port}`))
  }
}
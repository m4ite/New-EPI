const express = require('express');
// const router = require('./routes');

const app = express();

const port = 8080;
const server = app.listen(port, () => console.log(`Listening at port http://localhost:${port}`));
module.exports = server;
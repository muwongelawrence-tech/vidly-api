const express = require('express');
const app = express();
const winston = require("winston");
require("./startup/validation")();
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();


// environment variables and this helps to set the port dynamically
const port = process.env.PORT || 3400;
const server = app.listen(port, () => {
    winston.info(`listening on port ${port}..........`);
});

module.exports = server;

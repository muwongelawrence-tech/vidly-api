const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const config  = require("config");
const root = require('./routes/home');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require('express');
const app = express();

if(!config.get("jwtPrivateKey")){
    console.error("FATAL ERROR jwtPrivateKey is not defined.");
    process.exit(1);
}

// connecting to mongodb
 mongoose.connect("mongodb://localhost/vidly")
.then(() => console.log("connected to Mongodb ...."))
.catch(error => console.error("could not connect to Mongodb .....",error.message));

//middle wares to be used 
app.use(express.json());
app.use(express.static('public'));
app.use('/',root);
app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/movies',movies);
app.use('/api/rentals',rentals);
app.use('/api/users',users);
app.use('/api/auth', auth);

// environment variables and this heps to set the port dynamically
const port = process.env.PORT || 3400;
app.listen(port, () => {
    console.log(`listening on port ${port}..........`);
});

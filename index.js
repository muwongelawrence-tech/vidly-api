const mongoose = require("mongoose");
const root = require('./routes/home');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

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

// environment variables and this heps to set the port dynamically
const port = process.env.PORT || 3400;
app.listen(port, () => {
    console.log(`listening on port ${port}..........`);
});

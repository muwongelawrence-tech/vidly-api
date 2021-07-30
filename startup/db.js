const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function(){
    // connecting to mongodb
 mongoose.connect("mongodb://localhost/vidly")
 .then(() => winston.info("connected to Mongodb ...."));
 //.catch(error => console.error("could not connect to Mongodb .....",error.message));

}
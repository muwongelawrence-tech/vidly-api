const express = require('express');
const mongoose = require("mongoose");
const { Rental} = require("../models/rental");
const auth = require("../middleware/auth");
const router = express.Router();

router.post('/', auth, async (req,res) => {

  if(!req.body.customerId) return res.status(400).send("CustomerId is not provided.");

  if(!req.body.movieId) return res.status(400).send("movieId is not provided.");

 const rental = await Rental.findOne({
    'customer._id':req.body.customerId,
    'movie._id' : req.body.movieId
  });

  if(!rental) return res.status(404).send("Rental not found");

  if(rental.dateReturned) return res.status(400).send("Return already processed.");

  rental.dateReturned = new Date();
  await rental.save();

  return res.status(200).send();

  // const { error } = validateGenre(req.body);
  // if(error) return res.status(400).send(error.details[0].message);
  
//   let genre = new Genre({name : req.body.name });
   
//   //save genre to the database
//   genre = await genre.save();
//  res.send(genre);

});


module.exports = router;
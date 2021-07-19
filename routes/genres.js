const {Genre , ValidateGenre} = require("../models/genre");
const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
  const genres = await Genre.find().sort("name");
    res.send(genres);
  });

//getting  agenre with a specific id
router.get('/:id',async (req,res) => {
  const genre = await Genre.findById(req.params.id);

    if(!genre) return res.status(404).send("The genre with this id doesnot exist in the database.");
    
    res.send(genre); 
  });

  
// posting requests or creating new resources

  router.post('/',async (req,res) => {
    //input validation using joi
    const { error } = validateGenre(req.body);
       if(error) return res.status(400).send(error.details[0].message);
       
       let genre = new Genre({name : req.body.name });
        
       //save genre to the database
       genre = await genre.save();
      res.send(genre);
  });

  // updating requests

  router.put('/:id', async (req,res) => {
     
    //vaidating
    const { error } = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id,{ name :req.body.name},{new:true});

  
    if(!genre) res.status(404).send("The genre with this id doesnot exist in the database.");
    
     res.send(genre);
  });


  // deleting a resource from the database

  router.delete('/:id',async (req,res) => {
    //find and delete a genre from the database
   const genre =  await Genre.findByIdAndRemove(req.params.id);
    if(!genre){
       res.status(404).send("The genre with this id doesnot exist in the database.");
    }
   
    res.send(genre);
  });

module.exports = router;
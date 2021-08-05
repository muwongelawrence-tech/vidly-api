const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.post('/',async (req,res) => {
  
  res.status(401).send("UnAuthorized");
});


module.exports = router;
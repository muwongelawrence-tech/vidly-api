const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
console.log('listening on port 3400');
res.send('hello welcome to the world of AI and IOT summit');
});

module.exports = router;


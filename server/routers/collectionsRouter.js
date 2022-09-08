const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collectionsController');


router.post('/updateCollections', collectionsController.updateCollections, (req,res)=>{
    console.log('testing');
})


module.exports = router;
const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collectionsController');


router.post('/updateCollections', collectionsController.updateCollections, (req,res)=>{
    res.sendStatus(200).json(res.locals.data);
})

router.get('/readCollections', collectionsController.readCollections, (req,res)=>{
    res.status(200).json(res.locals.data);
})


module.exports = router;
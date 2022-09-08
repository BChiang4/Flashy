const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');
const cors = require('cors');


router.use(cors({
    origin:'*',
}))

router.get('/', deckController.readDeck, (req,res)=>{
    res.status(200).json(res.locals.deck);
})



module.exports = router;
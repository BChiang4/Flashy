const express = require('express');
const router = express.Router();
const flashController = require('../controllers/flashcardController.js');
//read the flash card
// router.get('/', flashController.readCard, (req,res)=>{
//       return res.send(200).json();
// })



// update the current flashcard 
// router.post('/update', flashController.updateCard, (req,res)=>{
//     return res.send(200).json();
// })
// flip the current card over 


// router.delete('/delete',(req,res)=>{
//     return res.send(200).json();
// })



module.exports = router;


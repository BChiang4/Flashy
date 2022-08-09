const router = {}
const flashController = require('../controllers/flashcardController.js');
//read the flash card
router.get('/', flashController.readCard, (req,res)=>{
      return res.send(200).json();
})



// update the current flashcard 
router.post('/', flashController.updateCard, (req,res)=>{
    return res.send(200).json();
})
// flip the current card over 



module.exports = router;


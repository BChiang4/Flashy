const pg = require('../model/dbModel.js');


const flashcardController = {};
// read the flashcard 
flashcardController.readCard = (req,res,next) => {
    const queryString = ``

    pg.query(queryString)
    .then(data=>{
        res.locals.cardInfo = data;
        return next();
    })
    .catch((err)=>{
        next(err);
    })
    
}
// update the flashcard 

// flip the flashcard 

// delete the flashcard 


module.exports = flashcardController;






export default flashcardController;



const pg = require('../model/dbModel.js');


const flashcardController = {};
// read the flashcard 
flashcardController.readCard = (req,res,next) => {
    const queryString = `SELECT * FROM DECKS WHERE ID`
    
    pg.query(queryString)
    .then(data=>{
        res.locals.cardInfo = data.rows;
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





const pg = require('../model/dbModel.js');


const deckController = {};

deckController.readDeck = (req,res,next)=>{
    // query the deck tables for the contents in the current deck 

    const queryString = `SELECT * FROM DECKS`;

    pg.query(queryString)
    .then(data =>{
        res.locals.deck = data.rows;
        return next();
    })
    .catch((err)=>{
       return next(err) 
        }  
    )

}




module.exports = deckController;
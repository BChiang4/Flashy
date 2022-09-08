const pg = require('../model/dbModel.js');


const collectionsController = {};

// add a collection to the Collections table 
collectionsController.updateCollections = (req,res,next)=>{
    console.log('working');
    const { collectionName } = req.body;
    

    const queryString = `INSERT INTO Collections (name) VALUES($1)`;

    pg.query(queryString,[collectionName])
    .then(data =>{
        res.locals.data = data.rows
        return next();
    })
    .catch((err)=>{
        return next(err);
    })
}
// delete a collection from the Collections table 

// read all the collections inside the Collections table 
collectionsController.readCollections = (req,res,next)=>{
    const queryString = `SELECT * FROM Collections`;

    pg.query(queryString)
    .then((data) => {
        res.locals.data = data.rows;
        return next();
    })
    .catch((err)=>{
        return next(err);
    })
}





module.exports = collectionsController;
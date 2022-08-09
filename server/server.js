const express = require('express');
const path = require('path');
const app = express.Router();
const PORT = 3000;
const flashcardRouter = require('./routers/flashcardRouter');


app.use('/flashcard', flashcardRouter);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));
})

// local error handler 
app.use((req,res)=> { res.sendStatus('404')});

// global error handler 
app.use((err,req,res,next) => {
    res.locals.message = err.message;
    console.log('ERROR: ', err)
    const errorStatus = err.status || 500;
    res.status(errorStatus).send(res.locals.message)
})


app.listen(PORT, ()=>{
    console.log(`server listening on port: ${PORT}`);
})




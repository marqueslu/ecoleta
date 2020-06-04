import express from 'express';

const app = express();


app.get('/users', (req, res) =>{
    res.json({message: "Hello World!"})
});

app.listen(3333);

import express from 'express'


//setup express
const app =  express()
const port = 3000

//setup HompageRoute
app.get('/', (req, res) => {
    res.send('homepage del ecommerce')
});




//listen app.js
app.listen(port, () => {
    console.log(`server listen on https://localhost/${port}`)
});


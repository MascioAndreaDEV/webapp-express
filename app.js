import express from 'express'
import sportsWearRouter from './routes/sportsWearRoute.js'

//setup express
const app =  express();
const port = process.env.APP_PORT;

//setup HompageRoute
app.get('/', (req, res) => {
    res.send('homepage del ecommerce')
});


app.use('/sportswear', sportsWearRouter)


//listen app.js
app.listen(port, () => {
    console.log(`server listen on http://localhost:${port}`)
});


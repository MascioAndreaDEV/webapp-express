import express from 'express'
import sportsWearRouter from './routes/sportsWearRoute.js'
import errorsHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

//setup express
const app =  express();
const port = process.env.APP_PORT || 3000;


//middleware  di setup
app.use(express.json())


//setup HompageRoute
app.get('/', (req, res) => {
    res.send('homepage del ecommerce')
});


app.use('/sportswear', sportsWearRouter)


// collego middlewate error handler (500)
app.use(errorsHandler);

// collego middleware per errore (400) not found
app.use(notFound);

//listen app.js
app.listen(port, () => {
    console.log(`server listen on http://localhost:${port}`)
});


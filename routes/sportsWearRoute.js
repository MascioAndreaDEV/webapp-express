import express from 'express'

const sportsWearRouter = express.Router()


//creo pagina index prodotti
sportsWearRouter.get('/', (req, res) => {
res.send('all sportswear avaible')
});

//SHOW
sportsWearRouter.get('/:id', (req, res) => {
    const id = Number(req.params.id)
res.send(`collegato al prodotto con id ${id}`)
});

//CREATE

sportsWearRouter.post('/', (req, res) => {
    const body = req.body;

    //verifica prodotto inserito
    console.log(body);

    res.send('aggiunta prodotto in sportswear')
});






export default sportsWearRouter
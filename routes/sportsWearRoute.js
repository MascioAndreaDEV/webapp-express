import express from 'express'

const sportsWearRouter = express.Router()


// Rotta INDEX prodotti (READ)
sportsWearRouter.get('/', (req, res) => {
    res.send('all sportswear available');
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

//UPDATE

sportsWearRouter.patch('/:id', (req, res) => {
    const id = req.params.id
res.send(`modifica del prodotto sportswear con id ${id}`)
});

//DESTROY
sportsWearRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`eliminazione del prodotto sportswear con id ${id}`)
})




export default sportsWearRouter
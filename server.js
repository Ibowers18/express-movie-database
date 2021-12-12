const express = require('express')
const path = require('path') //node native module
const { Movie } = require('./models/Movie')
const{Cast} = require('./models/Cast')
const{Crew} = require('./models/Crew')

const app = express()
const port = 3000

app.use(express.json())
//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1){
        coinflip = 'Heads'
    } else {
        coinflip = 'Tails'
    }
    res.send(coinflip)
})

//GET method on /movies route returns all movies
app.get('/movies', async (req,res) => {
    //find all instances of the Model Movie
    const allMovies = await Movie.findAll()
    //respond with allMovies as a json object
    res.json(allMovies)
})

//GET method on /movies route returns all movies parameters
app.get('/movies/:id', async (req,res) => {
    //find all instances of the Model Movie
    const thismovies = await Movie.findByPk(req.params.id)
    //respond with allMovies as a json objeect
    res.json(thismovies)
})

//create one restaurant
app.post('/movies', async (req,res) => {
    //create a movie using the json object passed in the request body
    let newMovie = await Movie.create(req.body)
    //respond with newMovies as a json objeect
    res.send(newMovie ?  'Movie created': 'post failed')
})

//update one movie by id
app.put('/movies/:id', async (req,res) => {
    //update a movie using the json object passed in the request body
    let updateMovies = await Movie.update(req.body, {
        where: {id: req.params.id}      
    })
    //respond with newRestaurants as a json objeect
    res.send("Movies updated")
})

//delete one movie by id
app.delete('/movies/:id', async (req,res) => {
    //delete the movie matching the request parameter id
     await Movie.destroy({
        where: {id: req.params.id}
     }) 
    //send string messageas response
    res.send('Movie deleted')
        
})

//GET method on /Cast route returns cast selections
app.get('/cast', async (req,res) => {
    //find all instances of the Model Cast
    const allCast = await Cast.findAll()
    //respond with allCast as a json objeect
    res.json(allCast)
})

//GET method on /Crew route returns crew selections
app.get('/crew', async (req,res) => {
    //find all instances of the Model Crew
    const allCrew = await Crew.findAll()
    //respond with allCrew as a json objeect
    res.json(allCrew)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
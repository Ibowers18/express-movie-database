
//import the associated models from index.js
const {Movie, sequelize} = require('./db')
//const {Movie} = require('./index')

//test movie database 
describe('Movie database', () => {

        beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})

        //create array of Movies
        const arrayOfMovies = [
            {movie_id:501, title: 'Goldfinger', rating: 'PG', popularity: 'thumbs up'},
            {movie_id:502, title: 'Thurgood Marshall',rating: 'PG-13', popularity: 'thumbs up'},
            {movie_id:503, title: 'The Color Purple', rating: 'PG-13', popularity: 'thumbs up'},
            {movie_id:504, title: 'Mask', rating: 'PG-13', popularity:'thumbs down'}
        ]
        
        //add array to database
       
    //create instance of Movie model for testing
    test('Movie has items', async() => {
         await Movie.bulkCreate(arrayOfMovies)
    })
        //read test instance from db
        
        const testMovie = await Movie.findOne({
            where:
             {movie_id: 501}});
        expect(testMovie.movie_id).toBe(501)
    })
    

   // afterAll(async()=> {({force:true})
        //await sequelize.sync
  //      sequelize.close()
   // })

})

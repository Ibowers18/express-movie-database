//const {Movie, Crew, Cast, sequelize} = require('./index')
//import the associated models from index.js
const { Model } = require('sequelize')
const {sequelize} = require('./db')
const {Movie} = require('./models/Movie')
const {Crew} = require('./models/Crew')
const {Cast} = require('./models/Cast')


//test movie database 
describe('Movie database', () => {

        beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        })
        //create array of Movies
        const arrayOfmovie = [
            {movie_id:501, title: 'Goldfinger', rating: 'PG', popularity: 'thumbs up'},
            {movie_id:502, title: 'Thurgood Marshall',rating: 'PG-13', popularity: 'thumbs up'},
            {movie_id:503, title: 'The Color Purple', rating: 'PG-13', popularity: 'thumbs up'},
            {movie_id:504, title: 'Mask', rating: 'PG-13', popularity:'thumbs down'}
        ]
        
       //create array of Cast
        const arrayOfCasts = [
            {movie_id:501, gender: 'male', char_name: 'Sean Connery', cast_order: 'lead Actor'},
            {movie_id:502, gender: 'male',char_name: 'Chadwick Bozeman', cast_order: 'lead Actor'},
            {movie_id:503, gender: 'female', char_name: 'Whoopi Goldberg', cast_order: 'lead Actress'},
            {movie_id:504, gender: 'male', char_name: 'Jim Carey', cast_order: 'Lead Actor'}
         ]

       //create array of Crew
        const arrayOfcrew = [
          {movie_id:501, gender: 'male', crew_name: 'Guy Hamilton', crew_position: 'Director'},
          {movie_id:502, gender: 'male', crew_name: 'Reginald Hudlin', crew_position: 'Director'},
          {movie_id:503, gender: 'female', crew_name: 'Steven Spielberg', crew_position: 'Director'},
          {movie_id:504, gender: 'male', crew_name: 'Peter Bogdanovich', ccrew_position: 'Director'}
        ]

        //add array to database

    //   await Movie.bulkCreate(arrayOfMovies)
    //   await Cast.bulkCreate(arraysOfCasts)
    //   await Crew.bulkCreate(arraysOfCrews)


    //create instance of Movie model for testing
    test('Movie has items', async() => {
         await Movie.bulkCreate(arrayOfmovie)
         const testmovie = await Movie.findOne({
            where:
             {movie_id: 501}});
        expect(testmovie.movie_id).toBe(501)

    })
        //read test instance from db
            
  
   
    //create instance of Crew model for testing
     test('Crew has items', async() => {
         await Crew.bulkCreate(arrayOfcrew)
      const testcrew = await Crew.findOne({
             where:
             {crew_name: 'Guy Hamilton'}});
        expect(testcrew.crew_name).toBe('Guy Hamilton')
    })  
    
    //create instance of Cast model for testing
      test('Cast has items', async() => {
        await Cast.bulkCreate(arrayOfCasts)
     const testcast = await Cast.findOne({
            where:
            {cast_order: 'lead Actor'}});
       expect(testcast.cast_order).toBe('lead Actor')


    })

//     //create instance of Movie model for testing
//     test('Movie has items', async() => {
//        await Movie.bulkCreate(arrayOfMovies)
//     })
//     //read test instance from db
   
//     const testMovie = await Movie.findOne({
//        where:
//         {movie_id: 503}});
//     expect(testMovie.movie_id).toBe(503)
//     })
})
    afterAll(async()=> {
    //   ({force:true})
        //await sequelize.sync
        sequelize.close()
    })    
      




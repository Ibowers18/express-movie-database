const {sequelize} = require('./db')

const {Movie} = require('./models/Movie')
const {Cast} = require('./models/Cast')
const {Crew} = require('./models/Crew')


// create seed file
const seedMovie = [
  {
    movie_id: 501,
    title: 'Goldfinger',
    rating: 'PG',
    popularity: 'thumbs up'
  },
  {
    movie_id: 502,
    title: 'Thurgood Marshall',
    rating: 'PG-13',
    popularity: 'thumbs up'
  },
  {
    movie_id: 503,
    title: 'The Color Purple',
    rating: 'PG-13',
    popularity: 'thumbs up'
  },
  {
    movie_id: 504,
    title: 'Mask',
    rating: 'PG-13',
    popularity: 'thumbs down'
  },
  
]

const seedCast = [
  {
    movie_id: 501,
    gender: 'male',
    char_name: 'Sean Connery',
    cast_order: 'lead Actor'
  },
  {
    movie_id: 502,
    gender: 'male',
    char_name: 'Chadwick Bozeman',
    cast_order: 'lead Actor'
  },
  {
    movie_id: 503,
    gender: 'female',
    char_name: 'Whoopi Goldberg',
    cast_order: 'lead Actress'
  },
  {
    movie_id: 504,
    gender: 'male',
    char_name: 'Jim Carey',
    cast_order: 'lead Actor'
  },
  
]

const seedCrew = [
  {
    movie_id: 501,
    gender: 'male',
    crew_name: 'Guy Hamilton',
    crew_position: 'Director'
  },
  {
    movie_id: 502,
    gender: 'male',
    crew_name: 'Reginald Hudlin',
    crew_position: 'Director'
  },
  {
    movie_id: 503,
    gender: 'male',
    crew_name: 'Steven Spielberg',
    crew_position: 'Director'
  },
  {
    movie_id: 504,
    gender: 'male',
    crew_name: 'Peter Bogdanovich',
    crew_position: 'Director'
  },
  
]

//Use async and await
const seed = async () => {
    try {
      await sequelize.sync({force: true})
      await Movie.bulkCreate(seedMovie, {validate: true})
      await Cast.bulkCreate(seedCast, {validate: true})
      await Crew.bulkCreate(seedCrew, {validate: true})
      console.log('Seeding success!')
      sequelize.close()
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }
  }
  
  // Seed message returned
  seed()
      .then(() => {
        console.log('Seeding success!')
      })
      .catch(err => {
        console.error('Oh no! Something went wrong!')
        console.error(err)
      })
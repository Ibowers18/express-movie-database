const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Movie } = require('./models/Movie')
const { Crew } = require('./models/Crew')
const { Cast } = require('./models/Cast')

//associate models
//adds foreign key to musician table connecting a musician instance to a specific band
Crew.belongsTo(Movie)
//gives us sequelize methods for a one to many relationship
Movie.hasMany(Crew)

// Cast.belongsTo(Movie)
// //gives us sequelize methods for a one to many relationship
// Movie.hasMany(Cast)

//export models with added associations
module.exports = {Movie, Crew, Cast,sequelize}

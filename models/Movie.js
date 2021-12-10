//models go here
const {sequelize, DataTypes, Model} = require('./db')
//create model for Movie in our database
class Movie extends Model {
//add query methods here
}
//create attributes for model using init method
Movie.init({

    movie_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    popularity: DataTypes.STRING
    
}, {    
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Model} 
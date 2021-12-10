const {sequelize, DataTypes, Model} = require('./db')

//create model for Movie in database
class Movie extends Model {
}
    //create attributes for model using init methos
    Movie.init({
        movie_id: DataType.INTEGER,
        title: DataType.STRING,
        rating: DataType.String,
        popularity: DataType.STRING
    
},  {
    //specifies what database the model is stored in
    sequelize, 
    timestamps: false
})
module.exports = {Movie}

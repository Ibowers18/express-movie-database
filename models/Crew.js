//models go here
const {sequelize, DataTypes, Model} = require('../db')
//create model for Crew in our database
class Crew extends Model {
//add query methods here
}
//create attributes for model using init method
Crew.init({

    movie_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    crew_name: DataTypes.STRING,
    crew_position: DataTypes.STRING
    
}, {    
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Crew} 
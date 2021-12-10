//models go here
const {sequelize, DataTypes, Model} = require('../db')
//create model for Crew in our database
class Cast extends Model {
//add query methods here
}
//create attributes for model using init method
Cast.init({

    movie_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    char_name: DataTypes.STRING,
    cast_order: DataTypes.STRING
    
}, {    
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Cast} 
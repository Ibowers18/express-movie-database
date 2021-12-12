const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

//create a database named 'sequelize'
//add models to this db in index
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', //type of SQL,
    storage: './expressmovie.sqlite', //file location for db
    logging: false
})

module.exports = {sequelize, DataTypes, Model} 
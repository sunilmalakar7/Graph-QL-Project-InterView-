const sequelize = require('../config/sql_conn')

const { Sequelize, DataTypes } = require('sequelize')

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re sync')
})

db.User = require("./User")(sequelize, DataTypes)

module.exports = db;
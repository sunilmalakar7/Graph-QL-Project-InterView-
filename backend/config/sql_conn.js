const Sequelize = require('sequelize')

const sequelize = new Sequelize("project", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: true
})

sequelize.authenticate().then(() => {
    console.log('Connected Mysql')
}).catch((e) => {
    console.log('e:', e)
})

module.exports = sequelize;
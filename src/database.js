const Sequelize = require('sequelize')

var db2 = {}

const sequelize = new Sequelize('dev', 'test', 'test', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
    operatorsAliases: false,
})

let models = [
    require('./models/data.js')
]

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db2[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db2).forEach(key => {
    if ('associate' in db2[key]) {
        db2[key].associate(db2)
    }
})

db2.sequelize = sequelize
db2.Sequelize = Sequelize

module.exports = db2
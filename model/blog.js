const Sequelize = require('sequelize')

const sequelize = new Sequelize('my_db', 'root', '', {
    host:'localhost',
    dialect:'mysql',
    operatorsAliases: false,

    pool: {
        max: 10,
        min:0,
        acquire:30000,
        idle: 10000
    }
})

const Blog = sequelize.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true
})

module.exports = Blog
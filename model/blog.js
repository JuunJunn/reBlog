const Sequlize = require('sequelize')

const sequelize = new Sequlize('my_db', 'root', '', {
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
        type: Sequlize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequlize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequlize.DATE
    },
    updatedAt: {
        type: Sequlize.DATE
    }
}, {
    freezeTableName: true
})

module.exports = Blog
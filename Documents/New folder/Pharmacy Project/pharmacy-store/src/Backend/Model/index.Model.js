const mysql = require('mysql')


// const connection = () => {
//     let DBconnection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'pharmacystore'
//         // database: 'db_newterm'
//     })

//     DBconnection.connect((err) => {
//         if (err) throw err
//         console.log('Connected to MYSQL successfully')
//     })

// }

// module.exports = DBconnection


// const sequelize = new Sequelize('database', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// })

// try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }

// module.exports = sequelize



// @desc using knex as ORM 
//@connect to database
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'pharmacystore'
    }
});

module.exports = knex



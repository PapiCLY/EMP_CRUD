const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Bootcamp2023*',
    database: 'cruddemo_db'
})


module.exports = mysqlPool;
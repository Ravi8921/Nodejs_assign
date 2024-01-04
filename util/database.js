const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    
    database: 'product_db',
    password: 'admin'
});

module.exports = pool.promise();
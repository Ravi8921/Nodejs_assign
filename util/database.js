// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
    
//     database: 'product_db',
//     password: 'admin'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('product_db', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

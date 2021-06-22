const mysql = require('mysql');


const pool = mysql.createPool({
    host: process.env.DBHOST, 
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: '',
    database: process.env.DATABASENAME,
    connectionLimit: 10
  });

   
    
module.exports = pool;



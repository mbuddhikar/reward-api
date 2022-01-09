const mysql = require('mysql');

module.exports = mysql.createPool({
     connectionLimit : 100,
     host : 'localhost',
     user :  'livemeuser',
     password: 'F69#r%H@3Q',
     database: 'pubad'
})
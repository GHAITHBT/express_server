const mysql = require('mysql')
const db = mysql.createConnection({
host: "sql11.freesqldatabase.com",
user: "sql11506936",
password: "qJ89PHdB7x",
database:"sql11506936" 
})

module.exports = db;
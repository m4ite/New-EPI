const mysql = require("mysql")

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'new-epi',
    password: 'root'
});

module.exports = con
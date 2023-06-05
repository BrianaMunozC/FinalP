const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'brianaProject',
    user: 'root',
    password: 'mypassword'
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('MySQL database connected successfully');
    }
});

module.exports = connection;
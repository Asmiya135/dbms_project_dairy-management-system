// db.js

require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the MySQL database:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

db.on('error', (err) => {
    console.error('Database error:', err);
});


module.exports = db;

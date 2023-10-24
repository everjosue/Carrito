const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    console.log('Connected to database with ID ' + connection.threadId);
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM clienteinv', (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return;
        }

        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

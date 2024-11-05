// routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/admin-login', (req, res) => {
    const { username, password } = req.body;

    // Log the incoming username and password
    console.log('Attempting login with:', { username, password });

    // Use uppercase column names to match the database
    const query = 'SELECT * FROM Admins WHERE USERNAME = ? AND PASSWORD = ?';

    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log the specific error
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            return res.status(200).json({ message: 'Welcome' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to execute SQL queries
router.post('/query-page', (req, res) => {
    const sqlQuery = req.body.query;

    // Execute the SQL query
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'An error occurred while executing the query.' });
        }
        res.json(result); // Send back the query results
    });
});

module.exports = router;

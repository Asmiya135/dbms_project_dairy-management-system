// db/routes/employeesRoutes.js
const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee, getEmployeeRecords } = require('../controllers/employeesController');

// Route to fetch employees
router.get('/employee-management', getEmployees);
router.post('/add-employee', addEmployee);
router.get('/employee-management/filtered', getEmployeeRecords);

module.exports = router;

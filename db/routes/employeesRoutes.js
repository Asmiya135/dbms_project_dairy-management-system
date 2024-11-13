const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee, getEmployeeRecords, getEmployeesWithShifts, deleteEmployee } = require('../controllers/employeesController');

// Route to fetch all employees
router.get('/employee-management', getEmployees);

// Route to add a new employee
router.post('/add-employee', addEmployee);

// Route to fetch employees with filters
router.get('/employee-management/filtered', getEmployeeRecords);

// Route to fetch employees with shift details
router.get('/employee-management/shifts', getEmployeesWithShifts);

// Route to delete employees with given EmployeeID
router.delete('/employee-management/:id', deleteEmployee);

module.exports = router;

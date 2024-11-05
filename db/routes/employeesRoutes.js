const express = require('express');
const router = express.Router();
// const employeesController = require('../controllers/employeesController');

// // Route to get all employees with their shift details
// router.get('/with-shifts', employeesController.getEmployeesWithShifts);

// // Route to add a shift for a specific employee
// router.post('/add-shift', employeesController.addShift);

// // Route to get all shifts for a specific employee
// router.get('/:EmployeeID/shifts', employeesController.getShiftsByEmployeeID);

// module.exports = router;


// // In employeesRoutes.js
// const express = require('express');
// const router = express.Router();
const employeesController = require('../controllers/employeesController');

// Route to get all employee records
router.get('/', employeesController.getEmployeeRecords);

module.exports = router;

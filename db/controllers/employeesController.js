// db/controllers/employeesController.js
const db = require('../config/db');

// Controller to get all employees
const getEmployees = (req, res) => {
    const query = 'SELECT * FROM Employees';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return res.status(500).json({ error: 'Failed to fetch employee data' });
        }
        res.json(results);
    });
};

// Controller to add a new employee
const addEmployee = (req, res) => {
    const { EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary } = req.body;

    const query = `
        INSERT INTO Employees (EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary], (err, results) => {
        if (err) {
            console.error('Error adding employee:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Employee added successfully', employeeId: results.insertId });
    });
};

module.exports = { getEmployees, addEmployee }; // Ensure both are exported

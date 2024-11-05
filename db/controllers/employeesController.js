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

// Function to fetch employee records with optional filters
const getEmployeeRecords = (req, res) => {
    const { employeeID, firstName, lastName, position, department, location, shiftTiming, yearsExperience, salary } = req.query;

    let query = 'SELECT * FROM Employees WHERE 1=1';
    const params = [];

    if (employeeID) {
        query += ' AND EmployeeID = ?';
        params.push(employeeID);
    }
    if (firstName) {
        query += ' AND FirstName LIKE ?';
        params.push(`%${firstName}%`);
    }
    if (lastName) {
        query += ' AND LastName LIKE ?';
        params.push(`%${lastName}%`);
    }
    if (position) {
        query += ' AND Position LIKE ?';
        params.push(`%${position}%`);
    }
    if (department) {
        query += ' AND Department LIKE ?';
        params.push(`%${department}%`);
    }
    if (location) {
        query += ' AND Location LIKE ?';
        params.push(`%${location}%`);
    }
    if (shiftTiming) {
        query += ' AND ShiftTiming = ?';
        params.push(shiftTiming);
    }
    if (yearsExperience) {
        query += ' AND YearsExperience = ?';
        params.push(yearsExperience);
    }
    if (salary) {
        query += ' AND Salary = ?';
        params.push(salary);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching filtered employees:', err);
            return res.status(500).json({ error: 'Failed to fetch filtered employee data' });
        }
        res.json(results);
    });
};
module.exports = { getEmployees, addEmployee, getEmployeeRecords };

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

// Controller to get all employees with shift details
const getEmployeesWithShifts = (req, res) => {
    const sql = `
        SELECT e.EmployeeID, e.FirstName, e.LastName, e.Position, e.Department, e.YearsExperience, e.Salary, sd.Shift_Start, sd.Shift_End
        FROM Employees e
        LEFT JOIN Shift_details sd ON e.EmployeeID = sd.EmployeeID
        ORDER BY e.EmployeeID, sd.Shift_Start DESC
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching employees with shift details:', err);
            return res.status(500).json({ error: 'Failed to fetch data' });
        }
        res.json(results);
    });
};

// Delete employee by ID
const deleteEmployee = (req, res) => {
    const { id } = req.params;

    // Step 1: Delete related shift details using a placeholder for EmployeeID
    const deleteShiftsQuery = 'DELETE FROM Shift_details WHERE EmployeeID = ?';
    db.query(deleteShiftsQuery, [id], (err, shiftResult) => {
        if (err) {
            console.error('Error deleting associated shifts:', err);
            return res.status(500).json({ error: 'Failed to delete associated shifts' });
        }

        // Step 2: Delete the employee after deleting shift details
        const deleteEmployeeQuery = 'DELETE FROM Employees WHERE EmployeeID = ?';
        db.query(deleteEmployeeQuery, [id], (err, employeeResult) => {
            if (err) {
                console.error('Error deleting employee:', err);
                return res.status(500).json({ error: 'Failed to delete employee' });
            }
            if (employeeResult.affectedRows === 0) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            res.status(200).json({ message: 'Employee and associated shifts deleted successfully' });
        });
    });
};


module.exports = { getEmployees, addEmployee, getEmployeeRecords, getEmployeesWithShifts, deleteEmployee };

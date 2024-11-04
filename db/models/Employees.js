const db = require('../config/db'); // Database connection setup

// Function to create a new employee record
const createEmployeeRecord = (data) => {
    const { employeeID, firstName, lastName, contactNumber, emailID, position, department, shiftTiming, yearsExperience, salary, location } = data;
    return db.query(
        'INSERT INTO Employees (EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [employeeID, firstName, lastName, contactNumber, emailID, position, department, shiftTiming, yearsExperience, salary, location]
    );
};

// Function to fetch employee records with optional filters
const getEmployeeRecords = (filters) => {
    const { employeeID, firstName, lastName, position, department, location } = filters;

    let query = 'SELECT * FROM Employees WHERE 1=1';
    const params = [];

    if (employeeID) {
        query += ' AND EmployeeID = ?';
        params.push(employeeID);
    }
    if (firstName) {
        query += ' AND FirstName LIKE ?';
        params.push(`%${firstName}%`); // For partial matches
    }
    if (lastName) {
        query += ' AND LastName LIKE ?';
        params.push(`%${lastName}%`); // For partial matches
    }
    if (position) {
        query += ' AND Position LIKE ?';
        params.push(`%${position}%`); // For partial matches
    }
    if (department) {
        query += ' AND Department LIKE ?';
        params.push(`%${department}%`); // For partial matches
    }
    if (location) {
        query += ' AND Location LIKE ?';
        params.push(`%${location}%`); // For partial matches
    }

    return db.query(query, params);
};

module.exports = { createEmployeeRecord, getEmployeeRecords };

const db = require('../config/db'); // Database connection setup

// Function to create a new employee record
const createEmployeeRecord = (data) => {
    const { employeeID, firstName, lastName, contactNumber, emailID, position, department, shiftTiming, yearsExperience, salary, location } = data;
    return db.query(
        'INSERT INTO Employees (EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [employeeID, firstName, lastName, contactNumber, emailID, position, department, shiftTiming, yearsExperience, salary, location]
    );
};



module.exports = { createEmployeeRecord, getEmployeeRecords };

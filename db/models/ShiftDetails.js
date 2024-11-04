const db = require('../config/db');

const ShiftDetails = {
    // Get all shifts for a specific employee
    getByEmployeeID: (employeeID, callback) => {
        const sql = `
            SELECT * FROM ShiftDetails
            WHERE EmployeeID = ?
            ORDER BY ShiftStart DESC
        `;
        db.query(sql, [employeeID], callback);
    },

    // Add a new shift detail for an employee
    add: ({ EmployeeID, ShiftStart, ShiftEnd }, callback) => {
        const sql = `
            INSERT INTO ShiftDetails (EmployeeID, ShiftStart, ShiftEnd)
            VALUES (?, ?, ?)
        `;
        db.query(sql, [EmployeeID, ShiftStart, ShiftEnd], callback);
    },

    // Get all employees with shift details
    getEmployeesWithShifts: (callback) => {
        const sql = `
            SELECT e.*, sd.ShiftID, sd.ShiftStart, sd.ShiftEnd
            FROM Employees e
            LEFT JOIN ShiftDetails sd ON e.EmployeeID = sd.EmployeeID
            ORDER BY e.EmployeeID, sd.ShiftStart DESC
        `;
        db.query(sql, callback);
    }
};

module.exports = ShiftDetails;

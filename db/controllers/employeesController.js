const ShiftDetails = require('../models/ShiftDetails');

// Get all employees with their shift details
exports.getEmployeesWithShifts = (req, res) => {
    ShiftDetails.getEmployeesWithShifts((err, results) => {
        if (err) {
            console.error("Error fetching employees with shifts:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};

// Add a shift for a specific employee
exports.addShift = (req, res) => {
    const { EmployeeID, ShiftStart, ShiftEnd } = req.body;
    ShiftDetails.add({ EmployeeID, ShiftStart, ShiftEnd }, (err, result) => {
        if (err) {
            console.error("Error adding shift:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json({ message: "Shift added successfully", shiftID: result.insertId });
        }
    });
};

// Get all shifts for a specific employee
exports.getShiftsByEmployeeID = (req, res) => {
    const { EmployeeID } = req.params;
    ShiftDetails.getByEmployeeID(EmployeeID, (err, results) => {
        if (err) {
            console.error("Error fetching shifts for employee:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};

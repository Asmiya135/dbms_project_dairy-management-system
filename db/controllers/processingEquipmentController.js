const MaintenanceRecords = require('../models/MaintenanceRecords');

// Get all maintenance records for processing equipment
exports.getProcessingEquipmentWithMaintenance = (req, res) => {
    MaintenanceRecords.getProcessingEquipmentMaintenance((err, results) => {
        if (err) {
            console.error("Error fetching maintenance records for processing equipment:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};

// Add a maintenance record for a specific processing machine
exports.addMaintenanceRecord = (req, res) => {
    const { MachineID, MaintenanceDate, TechnicianName, IssueReported, ActionTaken } = req.body;
    MaintenanceRecords.add({ MachineID, MaintenanceDate, TechnicianName, IssueReported, ActionTaken }, (err, result) => {
        if (err) {
            console.error("Error adding maintenance record:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json({ message: "Maintenance record added successfully", recordID: result.insertId });
        }
    });
};


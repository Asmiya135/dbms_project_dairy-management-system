const VehicleMaintenance = require('../models/VehicleMaintenance');

// Get all logistics equipment with maintenance records
exports.getLogisticsEquipmentWithMaintenance = (req, res) => {
    VehicleMaintenance.getAllMaintenanceRecords((err, results) => {
        if (err) {
            console.error("Error fetching maintenance records for logistics equipment:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};

// Add a maintenance record for a specific vehicle
exports.addVehicleMaintenanceRecord = (req, res) => {
    const { VehicleID, MaintenanceDate, IssueReported, MaintenanceCost } = req.body;
    VehicleMaintenance.add({ VehicleID, MaintenanceDate, IssueReported, MaintenanceCost }, (err, result) => {
        if (err) {
            console.error("Error adding vehicle maintenance record:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json({ message: "Vehicle maintenance record added successfully", maintenanceID: result.insertId });
        }
    });
};

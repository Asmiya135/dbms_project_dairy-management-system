const db = require('../config/db');

const VehicleMaintenance = {
    // Get all maintenance records for a specific vehicle
    getByVehicleID: (vehicleID, callback) => {
        const sql = `
            SELECT * FROM VehicleMaintenance
            WHERE VehicleID = ?
            ORDER BY MaintenanceDate DESC
        `;
        db.query(sql, [vehicleID], callback);
    },

    // Add a new vehicle maintenance record
    add: ({ VehicleID, MaintenanceDate, IssueReported, MaintenanceCost }, callback) => {
        const sql = `
            INSERT INTO VehicleMaintenance (VehicleID, MaintenanceDate, IssueReported, MaintenanceCost)
            VALUES (?, ?, ?, ?)
        `;
        db.query(sql, [VehicleID, MaintenanceDate, IssueReported, MaintenanceCost], callback);
    },

    // Get all maintenance records for logistics equipment (all vehicles)
    getAllMaintenanceRecords: (callback) => {
        const sql = `
            SELECT le.*, vm.MaintenanceID, vm.MaintenanceDate, vm.IssueReported, vm.MaintenanceCost
            FROM LogisticsEquipment le
            LEFT JOIN VehicleMaintenance vm ON le.VehicleID = vm.VehicleID
            ORDER BY le.VehicleID, vm.MaintenanceDate DESC
        `;
        db.query(sql, callback);
    }
};

module.exports = VehicleMaintenance;

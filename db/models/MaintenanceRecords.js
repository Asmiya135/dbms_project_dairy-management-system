const db = require('../config/db');

const MaintenanceRecords = {
    // Get all maintenance records for a specific machine
    getByMachineID: (machineID, callback) => {
        const sql = `
            SELECT * FROM MaintenanceRecords
            WHERE MachineID = ?
            ORDER BY MaintenanceDate DESC
        `;
        db.query(sql, [machineID], callback);
    },

    // Add a new maintenance record
    add: ({ MachineID, MaintenanceDate, TechnicianName, IssueReported, ActionTaken }, callback) => {
        const sql = `
            INSERT INTO MaintenanceRecords (MachineID, MaintenanceDate, TechnicianName, IssueReported, ActionTaken)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(sql, [MachineID, MaintenanceDate, TechnicianName, IssueReported, ActionTaken], callback);
    },

    // Get all maintenance records for processing equipment
    getProcessingEquipmentMaintenance: (callback) => {
        const sql = `
            SELECT pe.*, mr.RecordID, mr.MaintenanceDate, mr.TechnicianName, mr.IssueReported, mr.ActionTaken
            FROM ProcessingEquipment pe
            LEFT JOIN MaintenanceRecords mr ON pe.MachineID = mr.MachineID
            ORDER BY pe.MachineID, mr.MaintenanceDate DESC
        `;
        db.query(sql, callback);
    },

    // Get all maintenance records for packaging equipment
    getPackagingEquipmentMaintenance: (callback) => {
        const sql = `
            SELECT pk.*, mr.RecordID, mr.MaintenanceDate, mr.TechnicianName, mr.IssueReported, mr.ActionTaken
            FROM PackagingEquipment pk
            LEFT JOIN MaintenanceRecords mr ON pk.MachineID = mr.MachineID
            ORDER BY pk.MachineID, mr.MaintenanceDate DESC
        `;
        db.query(sql, callback);
    }
};

module.exports = MaintenanceRecords;

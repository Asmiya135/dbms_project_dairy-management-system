const db = require('../config/db'); // Database connection setup

// Function to create a new packaging equipment record
const createPackagingEquipmentRecord = (data) => {
    const { machineID, equipmentName, modelNumber, manufacturer, manufacturingYear, purchaseDate, maintenanceSchedule, packagingCapacityPerHour } = data;
    return db.query(
        'INSERT INTO PackagingEquipment (MachineID, EquipmentName, ModelNumber, Manufacturer, ManufacturingYear, PurchaseDate, MaintenanceSchedule, PackagingCapacityPerHour) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [machineID, equipmentName, modelNumber, manufacturer, manufacturingYear, purchaseDate, maintenanceSchedule, packagingCapacityPerHour]
    );
};

// Function to fetch packaging equipment records with optional filters
const getPackagingEquipmentRecords = (filters) => {
    const { machineID, equipmentName, modelNumber, manufacturer, status } = filters;

    let query = 'SELECT * FROM PackagingEquipment WHERE 1=1';
    const params = [];

    if (machineID) {
        query += ' AND MachineID = ?';
        params.push(machineID);
    }
    if (equipmentName) {
        query += ' AND EquipmentName LIKE ?';
        params.push(`%${equipmentName}%`); // For partial matches
    }
    if (modelNumber) {
        query += ' AND ModelNumber LIKE ?';
        params.push(`%${modelNumber}%`); // For partial matches
    }
    if (manufacturer) {
        query += ' AND Manufacturer LIKE ?';
        params.push(`%${manufacturer}%`); // For partial matches
    }

    return db.query(query, params);
};

module.exports = { createPackagingEquipmentRecord, getPackagingEquipmentRecords };

const db = require('../config/db'); // Database connection setup

// Function to create a new processing equipment record
const createProcessingEquipmentRecord = (data) => {
    const { machineID, equipmentName, modelNumber, manufacturer, manufacturingYear, purchaseDate, maintenanceSchedule, status, capacitySpecification } = data;
    return db.query(
        'INSERT INTO ProcessingEquipment (MachineID, EquipmentName, ModelNumber, Manufacturer, ManufacturingYear, PurchaseDate, MaintenanceSchedule, Status, CapacitySpecification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [machineID, equipmentName, modelNumber, manufacturer, manufacturingYear, purchaseDate, maintenanceSchedule, status, capacitySpecification]
    );
};

// Function to fetch processing equipment records with optional filters
const getProcessingEquipmentRecords = (filters) => {
    const { machineID, equipmentName, modelNumber, manufacturer, status } = filters;

    let query = 'SELECT * FROM ProcessingEquipment WHERE 1=1';
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
    if (status) {
        query += ' AND Status LIKE ?';
        params.push(`%${status}%`); // For partial matches
    }

    return db.query(query, params);
};

module.exports = { createProcessingEquipmentRecord, getProcessingEquipmentRecords };

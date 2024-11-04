const db = require('../config/db'); // Database connection setup

// Function to create a new logistics equipment record
const createLogisticsEquipmentRecord = (data) => {
    const { vehicleID, vehicleType, modelNumber, manufacturer, purchaseDate, maintenanceRecords, loadCapacity, registrationDetails } = data;
    return db.query(
        'INSERT INTO LogisticsEquipment (VehicleID, VehicleType, ModelNumber, Manufacturer, PurchaseDate, MaintenanceRecords, LoadCapacity, RegistrationDetails) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [vehicleID, vehicleType, modelNumber, manufacturer, purchaseDate, maintenanceRecords, loadCapacity, registrationDetails]
    );
};

// Function to fetch logistics equipment records with optional filters
const getLogisticsEquipmentRecords = (filters) => {
    const { vehicleID, vehicleType, modelNumber, manufacturer } = filters;

    let query = 'SELECT * FROM LogisticsEquipment WHERE 1=1';
    const params = [];

    if (vehicleID) {
        query += ' AND VehicleID = ?';
        params.push(vehicleID);
    }
    if (vehicleType) {
        query += ' AND VehicleType LIKE ?';
        params.push(`%${vehicleType}%`); // For partial matches
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

module.exports = { createLogisticsEquipmentRecord, getLogisticsEquipmentRecords };

const db = require('../config/db'); // Updated to reflect your file name

// Function to create a new raw milk intake record
const createRawMilkIntake = (data) => {
    const { supplierID, quantity, fatContent, purityLevel, deliveryDateTime, sourceLocation } = data;
    return db.query(
        'INSERT INTO RawMilkIntake (SupplierID, Quantity, FatContent, PurityLevel, DeliveryDateTime, SourceLocation) VALUES (?, ?, ?, ?, ?, ?)',
        [supplierID, quantity, fatContent, purityLevel, deliveryDateTime, sourceLocation]
    );
};

// Function to fetch raw milk intake records with optional filters
const getRawMilkIntake = (filters) => {
    const { supplierID, quantity, fatContent, purityLevel, deliveryDateTime, sourceLocation } = filters;

    let query = 'SELECT * FROM RawMilkIntake WHERE 1=1';
    const params = [];

    if (supplierID) {
        query += ' AND SupplierID = ?';
        params.push(supplierID);
    }
    if (quantity) {
        query += ' AND Quantity = ?';
        params.push(quantity);
    }
    if (fatContent) {
        query += ' AND FatContent = ?';
        params.push(fatContent);
    }
    if (purityLevel) {
        query += ' AND PurityLevel = ?';
        params.push(purityLevel);
    }
    if (deliveryDateTime) {
        query += ' AND DeliveryDateTime = ?';
        params.push(deliveryDateTime);
    }
    if (sourceLocation) {
        query += ' AND SourceLocation LIKE ?';
        params.push(`%${sourceLocation}%`); // For partial matches
    }

    return db.query(query, params);
};

module.exports = { createRawMilkIntake, getRawMilkIntake };

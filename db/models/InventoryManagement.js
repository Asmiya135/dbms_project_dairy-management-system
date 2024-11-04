const db = require('../config/db'); // Database connection setup

// Function to create a new inventory management record
const createInventoryRecord = (data) => {
    const { productID, stockLevel, reorderThreshold, storageCondition, warehouseLocation, dispatchRecord } = data;
    return db.query(
        'INSERT INTO InventoryManagement (ProductID, StockLevel, ReorderThreshold, StorageCondition, WarehouseLocation, DispatchRecord) VALUES (?, ?, ?, ?, ?, ?)',
        [productID, stockLevel, reorderThreshold, storageCondition, warehouseLocation, dispatchRecord]
    );
};

// Function to fetch inventory records with optional filters
const getInventoryRecords = (filters) => {
    const { productID, stockLevel, reorderThreshold, storageCondition, warehouseLocation } = filters;

    let query = 'SELECT * FROM InventoryManagement WHERE 1=1';
    const params = [];

    if (productID) {
        query += ' AND ProductID = ?';
        params.push(productID);
    }
    if (stockLevel) {
        query += ' AND StockLevel = ?';
        params.push(stockLevel);
    }
    if (reorderThreshold) {
        query += ' AND ReorderThreshold = ?';
        params.push(reorderThreshold);
    }
    if (storageCondition) {
        query += ' AND StorageCondition LIKE ?';
        params.push(`%${storageCondition}%`); // For partial matches
    }
    if (warehouseLocation) {
        query += ' AND WarehouseLocation LIKE ?';
        params.push(`%${warehouseLocation}%`); // For partial matches
    }

    return db.query(query, params);
};

module.exports = { createInventoryRecord, getInventoryRecords };

const db = require('../config/db'); // Updated to reflect your file name

// Function to create a new processed product record
const createProcessedProduct = (data) => {
    const { productID, productName, category, productionDate, expiryDate, batchNumber, quantityProduced } = data;
    return db.query(
        'INSERT INTO ProcessedProducts (ProductID, ProductName, Category, ProductionDate, ExpiryDate, BatchNumber, QuantityProduced) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [productID, productName, category, productionDate, expiryDate, batchNumber, quantityProduced]
    );
};

// Function to fetch processed products with optional filters
const getProcessedProducts = (filters) => {
    const { productID, productName, category, productionDate, expiryDate, batchNumber, quantityProduced } = filters;

    let query = 'SELECT * FROM ProcessedProducts WHERE 1=1';
    const params = [];

    if (productID) {
        query += ' AND ProductID = ?';
        params.push(productID);
    }
    if (productName) {
        query += ' AND ProductName LIKE ?';
        params.push(`%${productName}%`); // For partial matches
    }
    if (category) {
        query += ' AND Category = ?';
        params.push(category);
    }
    if (productionDate) {
        query += ' AND ProductionDate = ?';
        params.push(productionDate);
    }
    if (expiryDate) {
        query += ' AND ExpiryDate = ?';
        params.push(expiryDate);
    }
    if (batchNumber) {
        query += ' AND BatchNumber = ?';
        params.push(batchNumber);
    }
    if (quantityProduced) {
        query += ' AND QuantityProduced = ?';
        params.push(quantityProduced);
    }

    return db.query(query, params);
};

module.exports = { createProcessedProduct, getProcessedProducts };

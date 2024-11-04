const db = require('../config/db');

// Create a new supplier record
async function createSupplier(supplier) {
    const sql = `INSERT INTO Supplier (SupplierID, SupplierName, ContactNumber, EmailID, Address) 
                 VALUES (?, ?, ?, ?, ?)`;
    const params = [supplier.SupplierID, supplier.SupplierName, supplier.ContactNumber, supplier.EmailID, supplier.Address];
    await db.execute(sql, params);
}

// Get supplier records with optional filtering
async function getSuppliers(filter = {}) {
    const sql = `SELECT * FROM Supplier WHERE 1=1`;
    const params = [];

    if (filter.SupplierID) {
        sql += ` AND SupplierID = ?`;
        params.push(filter.SupplierID);
    }
    if (filter.SupplierName) {
        sql += ` AND SupplierName LIKE ?`;
        params.push(`%${filter.SupplierName}%`);
    }
    // Add more filters as needed

    const [results] = await db.execute(sql, params);
    return results;
}

module.exports = {
    createSupplier,
    getSuppliers,
};

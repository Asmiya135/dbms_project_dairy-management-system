const db = require('../config/db');

// Create a new warehouse record
async function createWarehouse(warehouse) {
    const sql = `INSERT INTO Warehouse (WarehouseID, WarehouseName, Location, StorageCapacity, 
                 TemperatureControlled, SecuritySystem, ManagerID) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [
        warehouse.WarehouseID,
        warehouse.WarehouseName,
        warehouse.Location,
        warehouse.StorageCapacity,
        warehouse.TemperatureControlled,
        warehouse.SecuritySystem,
        warehouse.ManagerID,
    ];
    await db.execute(sql, params);
}

// Get warehouse records with optional filtering
async function getWarehouses(filter = {}) {
    const sql = `SELECT * FROM Warehouse WHERE 1=1`;
    const params = [];

    if (filter.WarehouseID) {
        sql += ` AND WarehouseID = ?`;
        params.push(filter.WarehouseID);
    }
    if (filter.WarehouseName) {
        sql += ` AND WarehouseName LIKE ?`;
        params.push(`%${filter.WarehouseName}%`);
    }
    // Add more filters as needed

    const [results] = await db.execute(sql, params);
    return results;
}

module.exports = {
    createWarehouse,
    getWarehouses,
};

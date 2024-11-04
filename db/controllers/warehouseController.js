const warehouseModel = require('../models/Warehouse');

// Handler to create a new warehouse record
async function createWarehouse(req, res) {
    try {
        const newWarehouse = req.body;
        await warehouseModel.createWarehouse(newWarehouse);
        res.status(201).json({ message: 'Warehouse created successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating warehouse.' });
    }
}

// Handler to get warehouse records with optional filters
async function getWarehouses(req, res) {
    try {
        const filter = req.query; // Get filters from query parameters
        const warehouseRecords = await warehouseModel.getWarehouses(filter);
        res.status(200).json(warehouseRecords);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving warehouses.' });
    }
}

module.exports = {
    createWarehouse,
    getWarehouses,
};

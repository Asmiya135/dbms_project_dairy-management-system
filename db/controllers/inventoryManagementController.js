const inventoryManagementModel = require('../models/InventoryManagement');

// Function to get all inventory records with optional filters
exports.getInventoryRecords = async (req, res) => {
    try {
        const filters = req.query; // Extract filters from query parameters
        const inventoryData = await inventoryManagementModel.getInventoryRecords(filters);
        res.status(200).json(inventoryData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new inventory management record
exports.createInventoryRecord = async (req, res) => {
    try {
        const newRecord = req.body; // Expecting the body to contain the new record data
        await inventoryManagementModel.createInventoryRecord(newRecord);
        res.status(201).json({ message: 'Record created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


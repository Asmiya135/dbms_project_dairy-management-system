const supplierModel = require('../models/Supplier');

// Handler to create a new supplier record
async function createSupplier(req, res) {
    try {
        const newSupplier = req.body;
        await supplierModel.createSupplier(newSupplier);
        res.status(201).json({ message: 'Supplier created successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating supplier.' });
    }
}

// Handler to get supplier records with optional filters
async function getSuppliers(req, res) {
    try {
        const filter = req.query; // Get filters from query parameters
        const supplierRecords = await supplierModel.getSuppliers(filter);
        res.status(200).json(supplierRecords);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving suppliers.' });
    }
}

module.exports = {
    createSupplier,
    getSuppliers,
};

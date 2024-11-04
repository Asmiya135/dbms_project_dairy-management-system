const rawMilkIntakeModel = require('../models/rawMilkIntake');

// Function to get all raw milk intake records with optional filters
exports.getRawMilkIntake = async (req, res) => {
    try {
        const filters = req.query;
        const rawMilkData = await rawMilkIntakeModel.getRawMilkIntake(filters);
        res.status(200).json(rawMilkData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new raw milk intake record
exports.createRawMilkIntake = async (req, res) => {
    try {
        const newRecord = req.body;
        await rawMilkIntakeModel.createRawMilkIntake(newRecord);
        res.status(201).json({ message: 'Record created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const express = require('express');
const router = express.Router();
const rawMilkIntakeController = require('../controllers/rawMilkIntakeController');

// Route to get filtered raw milk intake records
router.get('/', rawMilkIntakeController.getRawMilkIntake);

// Route to create a new raw milk intake record
router.post('/', rawMilkIntakeController.createRawMilkIntake);

module.exports = router;

const express = require('express');
const router = express.Router();
const inventoryManagementController = require('../controllers/inventoryManagementController');

// Route to get filtered inventory records
router.get('/', inventoryManagementController.getInventoryRecords);

// Route to create a new inventory management record
router.post('/', inventoryManagementController.createInventoryRecord);

module.exports = router;

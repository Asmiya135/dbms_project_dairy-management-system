const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');

// Route to create a new warehouse record
router.post('/', warehouseController.createWarehouse);

// Route to get warehouse records with optional filters
router.get('/', warehouseController.getWarehouses);

module.exports = router;

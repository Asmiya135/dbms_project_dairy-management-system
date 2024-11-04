const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Route to create a new supplier record
router.post('/', supplierController.createSupplier);

// Route to get supplier records with optional filters
router.get('/', supplierController.getSuppliers);

module.exports = router;

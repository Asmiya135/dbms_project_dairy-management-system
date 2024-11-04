const express = require('express');
const router = express.Router();
const processedProductsController = require('../controllers/processedProductsController');

// Route to get all processed products with stock movement details
router.get('/with-movements', processedProductsController.getProcessedProductsWithMovements);

// Route to add a new stock movement for a product
router.post('/:ProductID/movement', processedProductsController.addStockMovement);

// Route to get stock movements by ProductID
router.get('/:ProductID/movements', processedProductsController.getStockMovementsByProduct);

module.exports = router;

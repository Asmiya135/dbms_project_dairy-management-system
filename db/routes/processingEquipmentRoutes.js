const express = require('express');
const router = express.Router();
const processingEquipmentController = require('../controllers/processingEquipmentController');

// Route to get all processing equipment with maintenance records
router.get('/with-maintenance', processingEquipmentController.getProcessingEquipmentWithMaintenance);

// Route to add a maintenance record for processing equipment
router.post('/add-maintenance', processingEquipmentController.addMaintenanceRecord);

module.exports = router;

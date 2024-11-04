const express = require('express');
const router = express.Router();
const packagingEquipmentController = require('../controllers/packagingEquipmentController');

// Route to get all packaging equipment with maintenance records
router.get('/with-maintenance', packagingEquipmentController.getPackagingEquipmentWithMaintenance);

// Route to add a maintenance record for packaging equipment
router.post('/add-maintenance', packagingEquipmentController.addMaintenanceRecord);

module.exports = router;

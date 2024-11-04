const express = require('express');
const router = express.Router();
const logisticsEquipmentController = require('../controllers/logisticsEquipmentController');

// Route to get all logistics equipment with maintenance records
router.get('/with-maintenance', logisticsEquipmentController.getLogisticsEquipmentWithMaintenance);

// Route to add a maintenance record for a specific vehicle
router.post('/add-maintenance', logisticsEquipmentController.addVehicleMaintenanceRecord);

module.exports = router;

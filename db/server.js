const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Ensure your database connection is established

// Import all route files
const rawMilkIntakeRoutes = require('./routes/rawMilkIntakeRoutes');
const processedProductsRoutes = require('./routes/processedProductsRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const employeesRoutes = require('./routes/employeesRoutes');
const packagingEquipmentRoutes = require('./routes/packagingEquipmentRoutes');
const processingEquipmentRoutes = require('./routes/processingEquipmentRoutes');
const logisticsRoutes = require('./routes/logisticsRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/raw-milk-intake', rawMilkIntakeRoutes);
app.use('/api/processed-products', processedProductsRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/packaging-equipment', packagingEquipmentRoutes);
app.use('/api/processing-equipment', processingEquipmentRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/warehouses', warehouseRoutes);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db'); // Ensure your database connection is established
const cors = require('cors');



// Import all route files
const rawMilkIntakeRoutes = require('./routes/rawMilkIntakeRoutes');
const processedProductsRoutes = require('./routes/processedProductsRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const packagingEquipmentRoutes = require('./routes/packagingEquipmentRoutes');
const processingEquipmentRoutes = require('./routes/processingEquipmentRoutes');
const logisticsRoutes = require('./routes/logisticsRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const authRoutes = require('./routes/authRoutes'); 
const queryRoutes = require('./routes/queryRoutes'); // Import query routes
const employeesRoutes = require('./routes/employeesRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/raw-milk-intake', rawMilkIntakeRoutes);
app.use('/api/processed-products', processedProductsRoutes);
app.use('/api/inventory', inventoryRoutes);

app.use('/api/packaging-equipment', packagingEquipmentRoutes);
app.use('/api/processing-equipment', processingEquipmentRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/warehouses', warehouseRoutes);
// app.use('/api/auth-routes', authRoutes);
app.use('/api', authRoutes); // This will serve the login route as /api/login
app.use('/api', queryRoutes); // Register the route under /api/query
app.use('/api', employeesRoutes);

// Database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process if the connection fails
    }
    console.log('Connected to the database');

    // Starting the server after successful database connection
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

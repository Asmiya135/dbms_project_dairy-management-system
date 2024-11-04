const StockMovement = require('../models/StockMovement');

// Get all processed products with stock movements
exports.getProcessedProductsWithMovements = (req, res) => {
    StockMovement.getProcessedProductsWithMovements((err, results) => {
        if (err) {
            console.error("Error fetching processed products with stock movements:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};

// Add a stock movement
exports.addStockMovement = (req, res) => {
    const { ProductID, MovementType, MovementDateTime, QuantityMoved } = req.body;
    StockMovement.add({ ProductID, MovementType, MovementDateTime, QuantityMoved }, (err, result) => {
        if (err) {
            console.error("Error adding stock movement:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json({ message: "Stock movement added successfully", movementID: result.insertId });
        }
    });
};

// Get stock movements by ProductID
exports.getStockMovementsByProduct = (req, res) => {
    const { ProductID } = req.params;
    StockMovement.getByProductID(ProductID, (err, results) => {
        if (err) {
            console.error("Error fetching stock movements for product:", err);
            res.status(500).json({ error: "Database query error" });
        } else {
            res.json(results);
        }
    });
};


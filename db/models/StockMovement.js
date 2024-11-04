const db = require('../config/db');

const StockMovement = {
    // Get all stock movements by ProductID
    getByProductID: (productID, callback) => {
        const sql = `
            SELECT * FROM StockMovement
            WHERE ProductID = ?
            ORDER BY MovementDateTime DESC
        `;
        db.query(sql, [productID], callback);
    },

    // Add a new stock movement
    add: ({ ProductID, MovementType, MovementDateTime, QuantityMoved }, callback) => {
        const sql = `
            INSERT INTO StockMovement (ProductID, MovementType, MovementDateTime, QuantityMoved)
            VALUES (?, ?, ?, ?)
        `;
        db.query(sql, [ProductID, MovementType, MovementDateTime, QuantityMoved], callback);
    },

    // Get processed products with stock movements
    getProcessedProductsWithMovements: (callback) => {
        const sql = `
            SELECT pp.*, sm.MovementID, sm.MovementType, sm.MovementDateTime, sm.QuantityMoved
            FROM ProcessedProducts pp
            LEFT JOIN StockMovement sm ON pp.ProductID = sm.ProductID
            ORDER BY pp.ProductID, sm.MovementDateTime DESC
        `;
        db.query(sql, callback);
    }
};

module.exports = StockMovement;

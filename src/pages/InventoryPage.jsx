// src/pages/InventoryPage.jsx
import React from 'react';

const InventoryPage = () => {
    // Sample inventory data
    const inventoryItems = [
        { id: 1, name: 'Milk', quantity: 50, unit: 'Liters' },
        { id: 2, name: 'Cheese', quantity: 30, unit: 'Kg' },
        { id: 3, name: 'Butter', quantity: 20, unit: 'Kg' },
        { id: 4, name: 'Yogurt', quantity: 25, unit: 'Liters' },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Inventory Management</h1>
            <p className="text-lg text-gray-600 mb-6">
                Here is the list of available inventory items in your dairy management system.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border-b-2 border-gray-300 border-r-2">ID</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 border-r-2">Item Name</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 border-r-2">Quantity</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryItems.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                                <td className="py-2 px-4 border-r-2 border-gray-300">{item.id}</td>
                                <td className="py-2 px-4 border-r-2 border-gray-300">{item.name}</td>
                                <td className="py-2 px-4 border-r-2 border-gray-300">{item.quantity}</td>
                                <td className="py-2 px-4">{item.unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryPage;

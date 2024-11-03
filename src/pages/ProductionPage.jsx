// src/pages/ProductionPage.jsx
import React from 'react';

const ProductionPage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Production Management</h1>
            <p className="text-lg text-gray-600 mb-6">
                Monitor production schedules, batch details, and manage production operations.
            </p>
            {/* Additional components for batch tracking, scheduling, etc. */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Current Production Batches</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Batch ID</th>
                            <th className="border border-gray-300 px-4 py-2">Product</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Scheduled Start</th>
                            <th className="border border-gray-300 px-4 py-2">Scheduled End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">001</td>
                            <td className="border border-gray-300 px-4 py-2">Milk Production</td>
                            <td className="border border-gray-300 px-4 py-2">In Progress</td>
                            <td className="border border-gray-300 px-4 py-2">11/30/2024</td>
                            <td className="border border-gray-300 px-4 py-2">12/05/2024</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">002</td>
                            <td className="border border-gray-300 px-4 py-2">Cheese Production</td>
                            <td className="border border-gray-300 px-4 py-2">Scheduled</td>
                            <td className="border border-gray-300 px-4 py-2">12/01/2024</td>
                            <td className="border border-gray-300 px-4 py-2">12/10/2024</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductionPage;

// src/components/Dashboard/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <p className="text-lg text-gray-600 mb-8">
                Overview of production, inventory, quality control, and maintenance.
            </p>

            {/* Card Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Production Metrics Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Production Metrics</h2>
                    <p className="text-gray-600 mb-1">Total Milk Produced: <span className="font-bold text-blue-600">1,200 Liters</span></p>
                    <p className="text-gray-600 mb-1">Average Daily Production: <span className="font-bold text-blue-600">300 Liters</span></p>
                    <div className="mt-4">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Inventory Metrics Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Inventory Metrics</h2>
                    <p className="text-gray-600 mb-1">Total Inventory: <span className="font-bold text-blue-600">150 Items</span></p>
                    <p className="text-gray-600 mb-1">Low Stock Alerts: <span className="font-bold text-blue-600">5 Items</span></p>
                    <div className="mt-4">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

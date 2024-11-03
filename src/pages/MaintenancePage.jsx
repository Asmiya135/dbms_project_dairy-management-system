// src/pages/MaintenancePage.jsx
import React from 'react';

const MaintenancePage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Maintenance Management</h1>
            <p className="text-lg text-gray-600 mb-6">
                Track maintenance schedules, equipment status, and maintenance logs.
            </p>
            {/* Additional components for maintenance scheduling and tracking can be added here */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Upcoming Maintenance Tasks</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Check and replace air filters - Due: 12/15/2024</li>
                    <li>Inspect equipment for wear and tear - Due: 12/20/2024</li>
                    <li>Schedule cleaning of storage tanks - Due: 12/25/2024</li>
                </ul>
            </div>
        </div>
    );
};

export default MaintenancePage;

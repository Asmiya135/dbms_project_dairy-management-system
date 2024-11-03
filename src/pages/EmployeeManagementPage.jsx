// src/pages/EmployeeManagementPage.jsx
import React from 'react';

const EmployeeManagementPage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Employee Management</h1>
            <p className="text-lg text-gray-600 mb-6">
                Manage employee records, roles, and performance evaluations.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Employee List</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Employee ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Department</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">E001</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">Manager</td>
                            <td className="border border-gray-300 px-4 py-2">Production</td>
                            <td className="border border-gray-300 px-4 py-2">Active</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">E002</td>
                            <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
                            <td className="border border-gray-300 px-4 py-2">Quality Control</td>
                            <td className="border border-gray-300 px-4 py-2">Quality</td>
                            <td className="border border-gray-300 px-4 py-2">Active</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">E003</td>
                            <td className="border border-gray-300 px-4 py-2">Alice Johnson</td>
                            <td className="border border-gray-300 px-4 py-2">Technician</td>
                            <td className="border border-gray-300 px-4 py-2">Maintenance</td>
                            <td className="border border-gray-300 px-4 py-2">Inactive</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeManagementPage;

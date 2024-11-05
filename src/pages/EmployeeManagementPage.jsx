// src/pages/EmployeeManagementPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeManagementPage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch employees from the backend
    const fetchEmployees = async () => {
        setLoading(true);
        setError(''); // Clear previous errors

        try {
            const response = await axios.get('http://localhost:3001/api/employees'); // Adjust URL if needed
            setEmployees(response.data);
        } catch (err) {
            setError('Failed to fetch employee data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Employee Management</h1>
            <p className="text-lg text-gray-600 mb-6">
                Manage employee records, roles, and performance evaluations.
            </p>
            <button
                onClick={fetchEmployees}
                className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Load Employee Data
            </button>

            {loading && <p className="text-blue-600">Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}

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
                        {employees.map((employee) => (
                            <tr key={employee.EmployeeID}>
                                <td className="border border-gray-300 px-4 py-2">{employee.EmployeeID}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {employee.FirstName} {employee.LastName}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{employee.Position}</td>
                                <td className="border border-gray-300 px-4 py-2">{employee.Department}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {employee.Status || 'Active'}
                                </td>
                            </tr>
                        ))}
                        {employees.length === 0 && !loading && (
                            <tr>
                                <td colSpan="5" className="text-center p-4 text-gray-500">
                                    No employees found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeManagementPage;

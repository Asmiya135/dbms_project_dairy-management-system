import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const EmployeeManagementPage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({
        employeeID: '',
        firstName: '',
        lastName: '',
        position: '',
        department: '',
        location: '',
        shiftTiming: '',
        yearsExperience: '',
        salary: '',
    });

    // Fetch employees from the backend
    const fetchEmployees = async () => {
        setLoading(true);
        setError(''); // Clear previous errors

        try {
            const response = await axios.get('http://localhost:3001/api/employee-management'); // Adjust URL if needed
            setEmployees(response.data);
        } catch (err) {
            setError('Failed to fetch employee data');
        } finally {
            setLoading(false);
        }
    };

    // Fetch filtered employees based on filters
    const fetchFilteredEmployees = async () => {
        setLoading(true);
        setError(''); // Clear previous errors

        const params = {};
        // Add filters to params
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                params[key] = filters[key];
            }
        });

        console.log(params);
        try {
            const response = await axios.get('http://localhost:3001/api/employee-management/filtered', {
                params,
            });
            setEmployees(response.data);
        } catch (err) {
            setError('Failed to fetch employee data');
        } finally {
            setLoading(false);
        }
    };

    // Handle filter change in inputs
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Employee Management</h1>

            {/* Filters */}
            <div className="flex flex-col space-y-2 mb-4">
                <input
                    name="employeeID"
                    placeholder="Employee ID"
                    value={filters.employeeID}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="firstName"
                    placeholder="First Name"
                    value={filters.firstName}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={filters.lastName}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="position"
                    placeholder="Position"
                    value={filters.position}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="department"
                    placeholder="Department"
                    value={filters.department}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="location"
                    placeholder="Location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="shiftTiming"
                    placeholder="Shift Timing (HH:MM:SS)"
                    value={filters.shiftTiming}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="yearsExperience"
                    placeholder="Years of Experience"
                    value={filters.yearsExperience}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
                <input
                    name="salary"
                    placeholder="Salary"
                    value={filters.salary}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                />
            </div>

            <div className="flex space-x-4 mb-4">
                <Link to="/add-employee">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Add New Employee
                    </button>
                </Link>

                <button
                    onClick={fetchEmployees}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Load All Employees
                </button>

                <button
                    onClick={fetchFilteredEmployees}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                >
                    Load Filtered Employees
                </button>
            </div>

            {loading && <p className="text-blue-600">Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {/* Display employee data if available */}
            {!loading && employees.length > 0 && (
                <div className="bg-white shadow-md rounded-lg p-6 mt-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Employee List</h2>
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Employee ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Role</th>
                                <th className="border border-gray-300 px-4 py-2">Department</th>
                                <th className="border border-gray-300 px-4 py-2">Shift Timing</th>
                                <th className="border border-gray-300 px-4 py-2">Years Experience</th>
                                <th className="border border-gray-300 px-4 py-2">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.EmployeeID}>
                                    <td className="border border-gray-300 px-4 py-2">{employee.EmployeeID}</td>
                                    <td className="border border-gray-300 px-4 py-2">{`${employee.FirstName} ${employee.LastName}`}</td>
                                    <td className="border border-gray-300 px-4 py-2">{employee.Position}</td>
                                    <td className="border border-gray-300 px-4 py-2">{employee.Department}</td>
                                    <td className="border border-gray-300 px-4 py-2">{employee.ShiftTiming}</td>
                                    <td className="border border-gray-300 px-4 py-2">{employee.YearsExperience}</td>
                                    <td className="border border-gray-300 px-4 py-2">{employee.Salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EmployeeManagementPage;

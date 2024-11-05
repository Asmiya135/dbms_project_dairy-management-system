// src/pages/EmployeeForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        EmployeeID: '',
        FirstName: '',
        LastName: '',
        ContactNumber: '',
        EmailID: '',
        Position: '',
        Department: '',
        ShiftTiming: '',
        YearsExperience: '',
        Salary: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3001/api/add-employee', formData);
            setSuccess('Employee added successfully!');
            setFormData({
                EmployeeID: '',
                FirstName: '',
                LastName: '',
                ContactNumber: '',
                EmailID: '',
                Position: '',
                Department: '',
                ShiftTiming: '',
                YearsExperience: '',
                Salary: ''
            });
        } catch (err) {
            setError('Failed to add employee. Please check your input.');
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Add New Employee</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Employee ID:</label>
                        <input
                            type="number"
                            name="EmployeeID"
                            value={formData.EmployeeID}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">First Name:</label>
                        <input
                            type="text"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Last Name:</label>
                        <input
                            type="text"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Contact Number:</label>
                        <input
                            type="text"
                            name="ContactNumber"
                            value={formData.ContactNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email ID:</label>
                        <input
                            type="email"
                            name="EmailID"
                            value={formData.EmailID}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Position:</label>
                        <input
                            type="text"
                            name="Position"
                            value={formData.Position}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Department:</label>
                        <input
                            type="text"
                            name="Department"
                            value={formData.Department}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Shift Timing:</label>
                        <input
                            type="time"
                            name="ShiftTiming"
                            value={formData.ShiftTiming}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Years of Experience:</label>
                        <input
                            type="number"
                            name="YearsExperience"
                            value={formData.YearsExperience}
                            onChange={handleChange}
                            required
                            min="0"
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Salary:</label>
                        <input
                            type="number"
                            name="Salary"
                            value={formData.Salary}
                            onChange={handleChange}
                            required
                            step="0.01"
                            min="0"
                            className="mt-1 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500 p-2"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Add Employee
                </button>
            </form>

            {error && <p className="text-red-600 mt-4">{error}</p>}
            {success && <p className="text-green-600 mt-4">{success}</p>}
        </div>
    );
};

export default EmployeeForm;

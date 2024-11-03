// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Dairy Management</h1>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex-grow flex items-center justify-center text-center px-4">
                <div>
                    <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
                        Welcome to the Dairy Management System
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Your comprehensive solution for managing dairy production, inventory, quality control, and maintenance.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link 
                            to="/production" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Production Management
                        </Link>
                        <Link 
                            to="/inventory" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Inventory Management
                        </Link>
                        <Link 
                            to="/quality-control" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Quality Control
                        </Link>
                        <Link 
                            to="/maintenance" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Maintenance
                        </Link>
                        {/* Link to Dashboard */}
                        <Link 
                            to="/dashboard" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Dashboard
                        </Link>
                        {/* Link to Employee Management */}
                        <Link 
                            to="/employee-management" 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transform transition duration-200 ease-in-out"
                        >
                            Employee Management
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white shadow-md py-4">
                <div className="max-w-6xl mx-auto text-center text-gray-600">
                    &copy; {new Date().getFullYear()} Dairy Management System. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

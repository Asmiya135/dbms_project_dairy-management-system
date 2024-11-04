// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="bg-blue-900 text-white w-64 min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
            <li>
                <Link to="/" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/dashboard" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to="/admin-login" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Admin Login
                </Link>
            </li>
            <li>
                <Link to="/production" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Production
                </Link>
            </li>
            <li>
                <Link to="/inventory" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Inventory
                </Link>
            </li>
            <li>
                <Link to="/quality-control" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Quality Control
                </Link>
            </li>
            <li>
                <Link to="/maintenance" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Maintenance
                </Link>
            </li>
            <li>
                <Link to="/employee-management" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Employee Management
                </Link>
            </li>
            <li>
                <Link to="/query-page" className="block hover:bg-blue-700 transition duration-200 rounded p-2">
                    Query Page
                </Link>
            </li>
        </ul>
    </div>
);

export default Sidebar;

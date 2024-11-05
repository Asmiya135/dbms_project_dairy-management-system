// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sidebar from './components/Common/Sidebar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import ProductionPage from './pages/ProductionPage';
import InventoryPage from './pages/InventoryPage';
import QualityControlPage from './pages/QualityControlPage';
import MaintenancePage from './pages/MaintenancePage';
import EmployeeManagementPage from './pages/EmployeeManagementPage';
import AdminLogin from './pages/AdminLogin';
import QueryPage from './pages/QueryPage';
import EmployeeForm from './pages/EmployeeForm';
import './App.css'

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <Navbar />
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1 p-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/production" element={<ProductionPage />} />
                            <Route path="/inventory" element={<InventoryPage />} />
                            <Route path="/quality-control" element={<QualityControlPage />} />
                            <Route path="/maintenance" element={<MaintenancePage />} />
                            <Route path="/employee-management" element={<EmployeeManagementPage />} />
                            <Route path="/admin-login" element={<AdminLogin />} />
                            <Route path="/query-page" element={<QueryPage />} />
                            <Route path="/add-employee" element={<EmployeeForm />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

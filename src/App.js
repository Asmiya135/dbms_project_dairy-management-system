

/*// src/App.js
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
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/production" element={<ProductionPage />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/quality-control" element={<QualityControlPage />} />
                        <Route path="/maintenance" element={<MaintenancePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;*/


/*// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}*/

// src/App.js
import React from 'react';
import './App.css';
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
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        {/* Route for the HomePage */}
                        <Route path="/" element={<HomePage />} />
                        
                        {/* Other application routes */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/production" element={<ProductionPage />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/quality-control" element={<QualityControlPage />} />
                        <Route path="/maintenance" element={<MaintenancePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

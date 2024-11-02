// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to the Dairy Management System</h1>
            <p>Your comprehensive solution for managing dairy production, inventory, quality control, and maintenance.</p>
            
            <div className="homepage-links">
                <Link to="/production" className="home-link">Production Management</Link>
                <Link to="/inventory" className="home-link">Inventory Management</Link>
                <Link to="/quality-control" className="home-link">Quality Control</Link>
                <Link to="/maintenance" className="home-link">Maintenance</Link>
            </div>
        </div>
    );
};

export default HomePage;


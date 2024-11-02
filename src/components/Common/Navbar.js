// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <h1 className="navbar-title">Dairy Management System</h1>
        <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
    </nav>
);

export default Navbar;

import React from 'react';
import { useAuth } from '../../AuthContext'; // Import the AuthContext
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAdmin, logout } = useAuth(); // Get isAdmin and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Dairy Management System</h1>
      <ul className="flex space-x-5">
        <li className="font-bold"><a href="/" className="hover:text-gray-300">Home</a></li>
        <li className="font-bold"><a href="/about" className="hover:text-gray-300">About</a></li>
        <li className="font-bold"><a href="/services" className="hover:text-gray-300">Services</a></li>
        <li className="font-bold"><a href="/profile" className="hover:text-gray-300">Profile</a></li>
        {isAdmin && ( // Show logout button only if the user is an admin
          <li className="font-bold">
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

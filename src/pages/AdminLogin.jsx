import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import the AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { loginAsAdmin } = useAuth(); // Access the login function
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/admin-login', {
                username,
                password,
            });
            setMessage(response.data.message); // Set welcome message
            loginAsAdmin(); // Set admin state

            // Wait for 1 second and then navigate to QueryPage
            setTimeout(() => {
                navigate('/query-page'); // Navigate to QueryPage
            }, 1000); // 1000 milliseconds = 1 second
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-4">Admin Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;

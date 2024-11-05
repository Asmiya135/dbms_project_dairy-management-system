import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Importing AuthContext
import { useNavigate } from 'react-router-dom';

const QueryPage = () => {
  const { isAdmin } = useAuth(); // Accessing isAdmin from context
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleExecuteQuery = async () => {
    setError(''); // Clear previous errors
    setResult(null); // Clear previous results

    try {
      const response = await axios.post('http://localhost:3001/api/query-page', { query });
      setResult(response.data);
    } catch (err) {
      setError('Error executing query: ' + (err.response?.data?.message || err.message));
    }
  };

  // Helper function to check if the result is an array of objects
  const isTableData = (data) => Array.isArray(data) && data.length > 0 && typeof data[0] === 'object';

  // If the user is not an admin, show an access denied message
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-red-600 text-xl text-center mt-4">Access Denied. Please login as Database Admin.</h1>
        <button 
          onClick={() => navigate('/admin-login')} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Admin Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">SQL Query Executor</h1>

      <textarea
        rows="10"
        cols="50"
        value={query}
        onChange={handleQueryChange}
        placeholder="Type your SQL query here..."
        className="w-full max-w-lg p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleExecuteQuery}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Execute Query
      </button>

      {error && <div className="text-red-600 mt-4">{error}</div>}

      {result && isTableData(result) && (
        <div className="mt-6 w-full max-w-lg bg-white p-4 border border-gray-200 rounded-md shadow-md overflow-x-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Query Result:</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {Object.keys(result[0]).map((key) => (
                  <th key={key} className="border px-4 py-2 bg-gray-200 text-gray-700 font-semibold">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, rowIndex) => (
                <tr key={rowIndex} className="even:bg-gray-100">
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={cellIndex} className="border px-4 py-2 text-gray-600">
                      {value !== null ? value.toString() : 'N/A'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result && !isTableData(result) && (
        <div className="mt-6 w-full max-w-lg bg-white p-4 border border-gray-200 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Query Result:</h2>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-gray-800">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default QueryPage;

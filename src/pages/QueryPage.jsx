import React, { useState } from 'react';
import axios from 'axios';

const QueryPage = () => {
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
      const response = await axios.post('http://localhost:3001/execute-query', { query });
      setResult(response.data);
    } catch (err) {
      setError('Error executing query: ' + err.response.data.message);
    }
  };

  return (
    <div>
      <h1>SQL Query Executor</h1>
      <textarea
        rows="10"
        cols="50"
        value={query}
        onChange={handleQueryChange}
        placeholder="Type your SQL query here..."
      />
      <br />
      <button onClick={handleExecuteQuery}>Execute Query</button>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      {result && (
        <div>
          <h2>Query Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QueryPage;

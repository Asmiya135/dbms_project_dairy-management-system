// src/pages/QualityControlPage.jsx
import React from 'react';

const QualityControlPage = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quality Control</h1>
            <p className="text-lg text-gray-600 mb-6">
                Monitor product quality, compliance, and testing results.
            </p>
            {/* Additional components for compliance data and testing reports can be added here */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Recent Testing Results</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Test ID</th>
                            <th className="border border-gray-300 px-4 py-2">Product</th>
                            <th className="border border-gray-300 px-4 py-2">Result</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">TC-001</td>
                            <td className="border border-gray-300 px-4 py-2">Milk</td>
                            <td className="border border-gray-300 px-4 py-2">Pass</td>
                            <td className="border border-gray-300 px-4 py-2">11/25/2024</td>
                            <td className="border border-gray-300 px-4 py-2">No issues</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">TC-002</td>
                            <td className="border border-gray-300 px-4 py-2">Cheese</td>
                            <td className="border border-gray-300 px-4 py-2">Fail</td>
                            <td className="border border-gray-300 px-4 py-2">11/26/2024</td>
                            <td className="border border-gray-300 px-4 py-2">Contamination detected</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QualityControlPage;

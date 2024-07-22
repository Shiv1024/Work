import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiries in 3 months</th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiries in 6 months</th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiries beyond 6 months</th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.enquiries3Months}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.enquiries6Months}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.enquiriesBeyond6Months}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

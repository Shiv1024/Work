import React from 'react';

const Table = ({ data, type, flgRupee }) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };
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
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flgRupee && '₹'}{row.enquiries3Months.toLocaleString('en-IN')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flgRupee && '₹'}{row.enquiries6Months.toLocaleString('en-IN')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flgRupee && '₹'}{row.enquiriesBeyond6Months.toLocaleString('en-IN')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flgRupee && '₹'}{row.total.toLocaleString('en-IN')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

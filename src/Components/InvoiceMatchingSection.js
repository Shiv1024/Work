import React from 'react';

const InvoiceTable = (props) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-sm mb-4">
      <div className="bg-bgClr2 p-4 flex justify-between items-center">
        <span>{"Invoice Matching"}</span>
      </div>
      <div className="p-4 border-t border-gray-300">
        <div className="overflow-auto">
          <table className="min-w-full border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Y/N</th>
                <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Amount</th>
                <th className="py-3 px-4 bg-bcgClr text-white">Credable Contri to overall business</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{props.data.invoiceMatchingYN||"null"}</td>
                <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                  {props.data.invoiceMatchingAmount ? formatAmount(props.data.invoiceMatchingAmount) : '-'}
                </td>
                <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{props.data.credableContriToOverallBusiness !== null ? `${(props.data.credableContriToOverallBusiness * 100)}%` : '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;

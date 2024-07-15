import React from 'react';
import VolatilityGauge from './VolatilityGauge';

const SalesAndInvoiceSection = (props) => {
  const { data } = props;

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 mb-5 g">
      {/* Sales Section */}
      <div className="border border-gray-300 rounded-md shadow-sm w-full lg:w-1/2 flex flex-col">
        <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md">
          <span>{"Sales"}</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between p-4 flex-grow">
          <div className="w-full lg:w-2/3">
            <table className="mt-5 border-collapse border border-slate-400 w-full">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-bcgClr text-white">Trend</th>
                  <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{data.trendDeclineIncreaseConstant}</td>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{data.remarks}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center mt-5 lg:mt-0">
            <VolatilityGauge value={data.volatilityScale} />
          </div>
        </div>
      </div>

      {/* Invoice Table Section */}
      <div className="border border-gray-300 rounded-md shadow-sm w-full lg:w-1/2 flex flex-col">
        <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md">
          <span>{"Invoice Matching"}</span>
        </div>
        <div className="p-4 border-t border-gray-300 flex-grow">
          <div className="overflow-auto">
            <table className="mt-5 min-w-full border-collapse border border-slate-400 h-full">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Y/N</th>
                  <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Amount</th>
                  <th className="py-3 px-4 bg-bcgClr text-white">Credable Contri to overall business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{data.invoiceMatchingYN || "null"}</td>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                    {data.invoiceMatchingAmount ? formatAmount(data.invoiceMatchingAmount) : '-'}</td>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{data.credableContriToOverallBusiness !== null ? `${(data.credableContriToOverallBusiness * 100)}%` : '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndInvoiceSection;

import React from 'react';
import CompanySection from './InvoiceMatchingSection';
import CustomerChunks from './Customerchunk';
import { useLocation, useNavigate } from 'react-router-dom';
import Gauge from './ProfilingGauge';

const Summary = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  if (!state || !state.borrowerData) {
    return null; // Handle case where no data is passed
  }

  const { borrowerData } = state;

  const handleBackClick = () => {
    navigate(`/clients`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-bcgClr text-white mb-8 flex items-center">
        <div className="py-2 px-4 mb-4">
          <button className="px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>Back</button>
        </div>
        <h1 className="text-2xl py-4 px-4 mb-4 font-bold mx-auto m">{borrowerData.borrower}</h1>
      </div>
      
      {/* Flex container for gauges and action table */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Profiling Gauge */}
        <div className="flex-1 mb-7">
          <Gauge 
            label="Profiling"
            value={borrowerData.profiling}
          />
        </div>

        {/* Credible EWS Flag Gauge */}
        <div className="flex-1">
          <Gauge 
            label="Credible EWS Flag"
            value={borrowerData.credableEWSFlag}
          />
        </div>

        {/* Action Table */}
        <div className="flex-1">
          <table className="border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-bcgClr text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{borrowerData.action}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional sections */}
      <CompanySection data={borrowerData} />
      <CustomerChunks data={borrowerData} />
    </div>
  );
};

export default Summary;

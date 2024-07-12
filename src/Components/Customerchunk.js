import React, { useState } from 'react';
import VolatilityGauge from './VolatilityGauge';

const CustomerChunks = () => {
  const [isCustomerChunksOpen, setIsCustomerChunksOpen] = useState(false);
  const [isFilingHygieneOpen, setIsFilingHygieneOpen] = useState(false);

  const toggleCustomerChunks = () => {
    setIsCustomerChunksOpen(!isCustomerChunksOpen);
  };

  const toggleFilingHygiene = () => {
    setIsFilingHygieneOpen(!isFilingHygieneOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Customer Chunks Dropdown */}
        <div className="border border-gray-300 rounded-md shadow-sm mb-4 w-full md:w-1/2">
          <div
            className="bg-bgClr2 p-4 cursor-pointer flex justify-between items-center"
            onClick={toggleCustomerChunks}
          >
            <span>{"Customer Chunks"}</span>
            <svg
              className={`w-4 h-4 transform ${isCustomerChunksOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isCustomerChunksOpen && (
            <div className="flex flex-col md:flex-row justify-between p-4">
              <div className="w-full md:w-1/2 mt-5 md:mt-5">
                <table className="border-collapse border border-slate-400 w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">Diversed Customer Base but overdependency on Top 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
                <VolatilityGauge value='low' />
              </div>
            </div>
          )}
        </div>

        {/* Filing Hygiene Dropdown */}
        <div className="border border-gray-300 rounded-md shadow-sm mb-4 w-full md:w-1/2 md:ml-2 mt-4 md:mt-0">
          <div
            className="bg-bgClr2 p-4 cursor-pointer flex justify-between items-center"
            onClick={toggleFilingHygiene}
          >
            <span>{"Filing Hygiene"}</span>
            <svg
              className={`w-4 h-4 transform ${isFilingHygieneOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isFilingHygieneOpen && (
            <div className="p-4 border-t border-gray-300">
            <div className="w-full  flex justify-center items-center mt-5 md:mt-0">
                <VolatilityGauge value='high' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerChunks;

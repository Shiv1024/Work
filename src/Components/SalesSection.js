import React, { useState } from 'react';
import VolatilityGauge from './VolatilityGauge';

const SalesSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="border border-gray-300 rounded-md shadow-sm mb-4">
        <div
          className="bg-bgClr2 p-4 cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <span>{"Sales"}</span>
          <svg
            className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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
        {isOpen && (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl p-4 border-t border-gray-300">
              <table className="border-collapse border border-slate-400 w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-bcgClr text-white">Trend</th>
                    <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">Increase</td>
                    <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">Year End Boost</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full max-w-lg p-4">
              <VolatilityGauge value='Medium' />
            </div>
          </div>
        )}
      </div>
    );
};

export default SalesSection;

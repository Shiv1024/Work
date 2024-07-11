import React, { useState } from 'react';

const InvoiceTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="border border-gray-300 rounded-md shadow-sm mb-4">
        <div
          className="bg-bgClr2 p-4  cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        //   style={{
        //     transitionProperty: 'margin, box-shadow !important',
        //     transitionDuration: '225ms, 280ms !important',
        //     transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1) !important',
        //     transitionDelay: '0s, 0s',
        //   }}
        >
          <span>{"Invoice Matching"}</span>
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
          <div className="p-4  border-t border-gray-300">
            <table className="border-collapse border border-slate-400 w-full">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Y/N </th>
                  <th className="py-3 px-4 bg-bcgClr text-white">Invoice Matching Amount</th>
                  <th className="py-3 px-4 bg-bcgClr text-white">Credable Contri to overall business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">28 out of 28</td>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">156.50</td>
                  <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

export default InvoiceTable;

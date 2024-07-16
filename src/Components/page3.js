import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Sidebar from './Sidebar';

const Page = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(`/clients`);
  };

  const [isPeriodTableVisible, setIsPeriodTableVisible] = useState(false);
  const [isFillingTableVisible, setIsFillingTableVisible] = useState(false);

  const togglePeriodTableVisibility = () => {
    setIsPeriodTableVisible(!isPeriodTableVisible);
  };

  const toggleFillingTableVisibility = () => {
    setIsFillingTableVisible(!isFillingTableVisible);
  };
  const fillingData = [
    { inclusions: 'Timely filings', measure: 'GST 1B', historicalTrend: 'On Time', currentMonthResponse: 'On Time', remarks: 'IRIS Data' },
    { inclusions: 'Timely filings', measure: 'GST 3B', historicalTrend: 'All Delayed', currentMonthResponse: 'Late', remarks: 'IRIS Data' },
    { inclusions: 'Late Fee Paid Trend', measure: 'MOM Late fee trend', historicalTrend: '2 out of 4', currentMonthResponse: 'Yes', remarks: 'AA Data' },
    { inclusions: 'Late Fee Paid', measure: 'Total Amount for duration', historicalTrend: '83,398.07', currentMonthResponse: '307.82', remarks: 'AA Data' },
    { inclusions: 'ITC', measure: 'Total Tax Paid', historicalTrend: '1,23,32,616.01', currentMonthResponse: '57,09,731.99', remarks: '' },
    { inclusions: 'ITC', measure: 'Total Cash Paid', historicalTrend: '33,58,258', currentMonthResponse: '21,16,850', remarks: '' },
    { inclusions: 'ITC', measure: 'Total ITC Paid', historicalTrend: '1,01,91,466', currentMonthResponse: '44,92,623', remarks: '' },
    { inclusions: 'ITC', measure: '% of Tax Paid through ITC', historicalTrend: '82.63%', currentMonthResponse: '78.68%', remarks: '' },
    { inclusions: 'Total No.GSTINs', measure: 'No. of total GST associated with Borrower', historicalTrend: '2', currentMonthResponse: '1', remarks: '' },
    { inclusions: 'No. of GSTINs turned to inactive', measure: 'No. of total GST status as inactive', historicalTrend: '1', currentMonthResponse: '1', remarks: '09AAIFB4104G1ZS is inactive' },
    { inclusions: 'No. of new GSTIN added by borrower', measure: '', historicalTrend: '', currentMonthResponse: '', remarks: 'None' },
  ];
  

  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Fixed width for Sidebar */}
      <div className="flex-grow p-4 ml-32 md:ml-48 lg:ml-56"> {/* Main content with margin to accommodate Sidebar */}
        <div className="bg-bcgClr text-white mb-8 flex items-center">
          <div className="py-2 px-4 mb-4">
            <button className="mt-2 px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
              <ArrowBackIosIcon />
            </button>
          </div>
          <h1 className="text-2xl py-4 px-4 mb-4 font-bold mx-auto">Company XYZ</h1>
        </div>
        {/* {Period section} */}
        <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
          <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer " onClick={togglePeriodTableVisibility}>
            <span>Period</span>
            <ArrowDropDownIcon className={`transition-transform transform ${isPeriodTableVisible ? 'rotate-180' : 'rotate-0'}`} />
          </div>
          {isPeriodTableVisible && (
            <div className="flex flex-col lg:flex-row justify-between p-4 flex-grow">
              <div className="w-full">
                <table className="my-auto border-collapse border border-slate-400 w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-bcgClr text-white">Inclusions</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Measure</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Historical trend</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Current Month Response</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        Oct 2023 to Feb 2024
                      </td>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        -
                      </td>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        Oct 2023 to Jan 2024
                      </td>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        Feb 2024
                      </td>
                      <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        If Feb 2024 NA, last available month data used
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        {/* {Filling Section} */}
        <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
          <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer " onClick={toggleFillingTableVisibility}>
            <span>Filling</span>
            <ArrowDropDownIcon className={`transition-transform transform ${isFillingTableVisible ? 'rotate-180' : 'rotate-0'}`} />
          </div>
          {isFillingTableVisible && (
            <div className="flex flex-col lg:flex-row justify-between p-4 flex-grow">
              <div className="w-full">
                <table className="my-auto border-collapse border border-slate-400 w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-bcgClr text-white">Inclusions</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Measure</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Historical trend</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Current Month Response</th>
                      <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fillingData.map((row, index) => (
                      <tr key={index}>
                        <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                          {row.inclusions}
                        </td>
                        <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                          {row.measure}
                        </td>
                        <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                          {row.historicalTrend}
                        </td>
                        <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                          {row.currentMonthResponse}
                        </td>
                        <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                          {row.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

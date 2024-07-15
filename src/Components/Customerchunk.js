import React from 'react';
import VolatilityGauge from './VolatilityGauge';

const CustomerChunks = (props) => {
  console.log(props.data)
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Customer Chunks Section */}
        <div className="border border-gray-300 rounded-md shadow-sm mb-4 w-full md:w-1/2">
          <div className="bg-bgClr2 p-4 flex justify-between items-center">
            <span>{"Customer Chunks"}</span>
          </div>
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
                    <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                      {props.data.remark}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center mt-5 md:mt-0">
              <VolatilityGauge value={props.data.volatility} />
            </div>
          </div>
        </div>

        {/* Filing Hygiene Section */}
        <div className="border border-gray-300 rounded-md shadow-sm mb-4 w-full md:w-1/2 md:ml-2 mt-4 md:mt-0">
          <div className="bg-bgClr2 p-4 flex justify-between items-center">
            <span>{"Filing Hygiene"}</span>
          </div>
          <div className="p-4 border-t border-gray-300">
            <div className="w-full flex justify-center items-center mt-5 md:mt-0">
              {console.log(props.data.filingHygiene)}
              <VolatilityGauge value={props.data.filingHygiene} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChunks;

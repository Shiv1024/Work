import React from 'react';
import VolatilityGauge from './VolatilityGauge';

const CustomerChunks = (props) => {
  console.log(props.data)
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 mb-5 ">
        {/* Customer Chunks Section */}
       <div className="border border-gray-300 rounded-md shadow-sm w-full lg:w-1/2 flex flex-col">
          <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md">
            <span>{"Customer Churns"}</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between p-4 flex-grow">
            <div className="w-full lg:w-2/3">
              <table className="mt-5 border-collapse border border-slate-400 w-full">
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
            <div className="w-full lg:w-1/3 flex justify-center items-center mt-5 lg:mt-0">
              <VolatilityGauge value={props.data.volatility} />
            </div>
          </div>
        </div>

        {/* Filing Hygiene Section */}
        <div className="border border-gray-300 rounded-md shadow-sm w-full lg:w-1/2 flex flex-col">
          <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md">
            <span>{"Filing Hygiene"}</span>
          </div>
          <div className="p-4 border-t border-gray-300 flex-grow">
            <div className="w-full flex justify-center items-center mt-5 lg:mt-0">
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

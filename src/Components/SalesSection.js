import React from 'react';
import VolatilityGauge from './VolatilityGauge';

const SalesSection = (props) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-sm mb-4">
      <div className="bg-bgClr2 p-4 flex justify-between items-center">
        <span>{"Sales"}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="w-full md:w-2/3 mt-5 md:mt-5">
          <table className="border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-bcgClr text-white">Trend</th>
                <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{props.data.trendDeclineIncreaseConstant}</td>
                <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">{props.data.remarks}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center mt-5 md:mt-0">
          <VolatilityGauge value={props.data.volatilityScale} />
        </div>
      </div>
    </div>
  );
};

export default SalesSection;

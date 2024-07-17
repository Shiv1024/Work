import React, {useState} from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DiffTable (props)
{
    const [isDiffTableVisible, setIsDiffTableVisible] = useState(false);

  const toggleDiffTableVisibility = () => {
    setIsDiffTableVisible(!isDiffTableVisible);
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
    <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer " onClick={toggleDiffTableVisibility}>
      <span>{props.Name}</span>
      <ArrowDropDownIcon className={`transition-transform transform ${isDiffTableVisible ? 'rotate-180' : 'rotate-0'}`} />
    </div>
    {isDiffTableVisible && (
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
              {props.Data.map((row, index) => (
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
  );
}

export default DiffTable;
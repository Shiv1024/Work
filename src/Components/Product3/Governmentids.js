import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const IdInfo = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const idInfo = [
    { label: "PAN No.", value: "ALXPJ5729R" },
    { label: "Passport No.", value: "" },
    { label: "Aadhar No.", value: "XXXXXXXXXXXX" },
    { label: "Other IDs", value: "30041497894988" },
  ];

  return (
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
      <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer" onClick={toggleTableVisibility}>
        <span>ID Information</span>
        <ArrowDropDownIcon className={`transition-transform transform ${isTableVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isTableVisible && (
        <div className="flex flex-col lg:flex-row p-4 gap-4">
          {idInfo.map((item, index) => (
            <div key={index} className="flex-1">
              <table className="w-full border-collapse border border-slate-400">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-bcgClr text-white">{item.label}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-t border-slate-400 text-center">{item && item.value||'-'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdInfo;

import React from "react";
import Sidebar from "../Sidebar3";
import Cards from "../card.js";
import CIBIL from "../Bank Score/CIBIL.js";
import Contactinfo from "./Contactinfo.js";
import IdInfo from "./Governmentids.js";
const Personalinfo = () => {
  const ageconversion = (birthdateInput) => {
    const date = new Date();
    const [day, month, year] = birthdateInput.split('-').map(Number);
    const birthdate = new Date(year, month - 1, day);
    let age = date.getFullYear() - birthdate.getFullYear();
    const m = date.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && date.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }

  const cardinfo = [
    { label: "Total Active Loan Outstanding", value: 130672181 },
    { label: "Number of Overdues", value: 3 },
    { label: "Total Enquiries", value: 143 },
    { label: "Enquiries in last 1 Month", value: 2 },
    { label: "Enquiries in Last 12 Months", value: 61 },
    { label: "Number of Loans 50k plus in Last 6 Months", value: 0 },
    { label: "Amount of Loans in Last 6 Months", value: 0 },
    { label: "Age", value: ageconversion("14-02-1991") },
    { label: "Date of oldest Loan", value: "30-03-2015" }
  ];
  return (
    <div className="flex">
      <div className='flex-none'>
        <Sidebar />
      </div>
      <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="w-full border-l border-gray-400 h-12 md:h-16 lg:h-20 bg-bcgClr flex flex-col justify-center">
            <h1 className="text-white text-base md:text-lg lg:text-xl ml-4">JAY DIPAKKUMAR JHAVERI S/O DIPAK JHAVERI</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-0">
            <CIBIL value={734} className="text-lg md:text-xl lg:text-2xl" />
          </div>
          <Cards cardinfo={cardinfo} />
          <div className="p-4">
          <Contactinfo/>
          <IdInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalinfo;

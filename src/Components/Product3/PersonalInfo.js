import React from "react";
import Sidebar from "../Sidebar3";
import Cards from "../card.js";
// import CIBIL from "../Bank Score/CIBIL.js";
import Contactinfo from "./Contactinfo.js";
import IdInfo from "./Governmentids.js";
import VolatilityGauge from "../VolatilityGauge.js";
import HorizontalBar from "../NewCibilScore.js";
import amountCountData from './Amount/dummydataAmtCnt.json';
import amountData from "./Amount/dummydataAmt.json"

const Personalinfo = () => {
  const enquiryCountData = [
    { category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 8, enquiriesBeyond6Months: 78, total: 86 },
    { category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 2, enquiriesBeyond6Months: 7, total: 9 },
    { category: 'Other', enquiries3Months: 0, enquiries6Months: 3, enquiriesBeyond6Months: 29, total: 32 },
    { category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 8, total: 8 },
    { category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 5, total: 5 },
    { category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 3, total: 3 },
    { category: 'Total', enquiries3Months: 0, enquiries6Months: 13, enquiriesBeyond6Months: 130, total: 143 },
  ];

  const enquiryAmountData = [
    { category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 15500000, enquiriesBeyond6Months: 158641199, total: 174141199},
    { category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 600000, enquiriesBeyond6Months: 84000, total: 684000 },
    { category: 'Other', enquiries3Months: 0, enquiries6Months: 30000000, enquiriesBeyond6Months: 75703310, total: 105703310 },
    { category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 131246000, total: 131246000 },
    { category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 9719000, total: 9719000 },
    { category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 23555000, total: 23555000 },
    { category: 'Total', enquiries3Months: 0, enquiries6Months: 46100000, enquiriesBeyond6Months: 398948509, total: 445048509 },
  ];

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
      {/* <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-hidden bg-blue-50"> */}
      <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto ">
          <div className="w-full border-l border-gray-400 h-12 md:h-16 lg:h-20 bg-bcgClr flex flex-col justify-center">
            <h1 className="text-white text-base md:text-lg lg:text-xl ml-4">JAY DIPAKKUMAR JHAVERI S/O DIPAK JHAVERI</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-0">
            <div className="rounded-lg shadow-2xl mt-8">
             <h2 className="text-left text-xl font-semibold m-4">Cibil Score</h2>
             <hr className="mb-6 border-gray-300" />
              <VolatilityGauge value={734} title={"Cibil Score:"} className="text-lg md:text-xl lg:text-2xl" />
            </div>

          <div className="flex justify-evenly items-center mt-10">
            <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Enquiry Count</h2>
              <hr className="mb-6 border-gray-300" />
              {enquiryCountData.map((row) => (
                <HorizontalBar
                  key={row.category}
                  value1={row.enquiries3Months}
                  value2={row.enquiries6Months}
                  value3={row.enquiriesBeyond6Months}
                  value4={row.total}
                  head={row.category}
                  isEnquiry={true}
                />
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Enquiry Amount</h2>
              <hr className="mb-6 border-gray-300" />
              {enquiryAmountData.map((row) => (
                <HorizontalBar
                  key={row.category}
                  value1={row.enquiries3Months}
                  value2={row.enquiries6Months}
                  value3={row.enquiriesBeyond6Months}
                  value4={row.total}
                  head={row.category}
                  iscurrency={true}
                  isEnquiry={true}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-evenly items-center my-10">
            <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Amount Count</h2>
              <hr className="mb-6 border-gray-300" />
              {amountCountData.map((row) => (
              <HorizontalBar
                // key={row.category} // Ensure key is unique for each item
                value1={row.guarantor}
                value2={row.joint}
                value3={row.individual}
                value4={row.total}
                head={row.category}
                iscurrency={false}
                
              />
            ))}
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Amount</h2>
              <hr className="mb-6 border-gray-300" />
              {amountData.map((row) => (
                <HorizontalBar
                  // key={row.category} // Ensure key is unique for each item
                  value1={row.guarantor}
                  value2={row.joint}
                  value3={row.individual}
                  value4={row.total}
                  head={row.category}
                  iscurrency={true}
                  isEnquiry={false}
                />
              ))}
            </div>
          </div>
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

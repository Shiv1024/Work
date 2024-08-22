import React, { useState } from "react";
import Sidebar from "../Sidebar3";
import Table5 from './Table5'; // Ensure this path is correct based on your project structure
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from "@mui/icons-material";

function Option4() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(`/info`);
  };

  const [isCompany, setIsCompany] = useState(false);

  const handleClick = () => {
    setIsCompany(!isCompany);
  };

  const sampleData = [
    {
      status: 'Active',
      type: 'Loan',
      category: 'Business',
      ownership: 'Guarantor',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      closed: 'N/A',
      sanctioned: 100000,
      outstandingBalance: 50000,
      overdue: 0,
      emi: 2000,
      elapsedTenure: 12,
      remainingTenure: 12,
      tenure: 24,
      interestRate: 5,
      highCredit: 150000,
      latestMMYY: '07/23',
      averageDPD: 0,
      maxDPD: 0,
      flag: 'Green',
      amountLastRepaid: 2000,
      repaymentFrequency: 'Monthly'
    },
    {
      status: 'Inactive',
      type: 'Credit Card',
      category: 'Personal',
      ownership: 'Joint',
      startDate: '2021-05-01',
      endDate: '2022-05-01',
      closed: '2022-05-01',
      sanctioned: 20000,
      outstandingBalance: 0,
      overdue: 0,
      emi: 500,
      elapsedTenure: 12,
      remainingTenure: 0,
      tenure: 12,
      interestRate: 12,
      highCredit: 30000,
      latestMMYY: '05/22',
      averageDPD: 5,
      maxDPD: 10,
      flag: 'Red',
      amountLastRepaid: 500,
      repaymentFrequency: 'Monthly'
    },
    {
      status: 'Active',
      type: 'Mortgage',
      category: 'Home',
      ownership: 'Individual',
      startDate: '2020-01-01',
      endDate: '2040-01-01',
      closed: 'N/A',
      sanctioned: 500000,
      outstandingBalance: 400000,
      overdue: 0,
      emi: 20000,
      elapsedTenure: 48,
      remainingTenure: 192,
      tenure: 240,
      interestRate: 3,
      highCredit: 550000,
      latestMMYY: '07/23',
      averageDPD: 0,
      maxDPD: 0,
      flag: 'Green',
      amountLastRepaid: 20000,
      repaymentFrequency: 'Monthly'
    },
    {
      status: 'Inactive',
      type: 'Car Loan',
      category: 'Auto',
      ownership: 'Joint',
      startDate: '2018-01-01',
      endDate: '2021-01-01',
      closed: '2021-01-01',
      sanctioned: 150000,
      outstandingBalance: 0,
      overdue: 0,
      emi: 5000,
      elapsedTenure: 36,
      remainingTenure: 0,
      tenure: 36,
      interestRate: 7,
      highCredit: 160000,
      latestMMYY: '01/21',
      averageDPD: 0,
      maxDPD: 0,
      flag: 'Yellow',
      amountLastRepaid: 5000,
      repaymentFrequency: 'Monthly'
    },
    {
      status: 'Active',
      type: 'Education Loan',
      category: 'Student',
      ownership: 'Individual',
      startDate: '2019-01-01',
      endDate: '2029-01-01',
      closed: 'N/A',
      sanctioned: 80000,
      outstandingBalance: 60000,
      overdue: 0,
      emi: 1000,
      elapsedTenure: 60,
      remainingTenure: 60,
      tenure: 120,
      interestRate: 4,
      highCredit: 85000,
      latestMMYY: '07/23',
      averageDPD: 0,
      maxDPD: 0,
      flag: 'Green',
      amountLastRepaid: 1000,
      repaymentFrequency: 'Monthly'
    },
    {
      status: 'Active',
      type: 'Personal Loan',
      category: 'Personal',
      ownership: 'Guarantor',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      closed: 'N/A',
      sanctioned: 5000,
      outstandingBalance: 3000,
      overdue: 0,
      emi: 500,
      elapsedTenure: 6,
      remainingTenure: 6,
      tenure: 12,
      interestRate: 10,
      highCredit: 6000,
      latestMMYY: '07/23',
      averageDPD: 0,
      maxDPD: 0,
      flag: 'Green',
      amountLastRepaid: 500,
      repaymentFrequency: 'Monthly'
    },
  ];
  

  return (
    <div className="flex bg-bg-mainClr min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr bg-gradient-to-tl to-bcgClr from-bgToClr text-white flex items-center">
                    <div className="p-4">
                       <button className="px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
                         <ArrowBack />
                       </button>
                    </div>
                     <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
              </div>
          <div className="flex flex-col items-start justify-center p-4 ">
             <button 
               className={`px-4 py-2 rounded ${isCompany ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`} 
               onClick={handleClick}
             >
               {isCompany ? "Company" : "Personal"}
             </button>
             <div className="mt-6 w-full">
               <Table5 
               flgComp={isCompany}
               wholeInfo={sampleData} 
               />
             </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Option4;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar3";
import Cards from "../card.js";
import Contactinfo from "./Contactinfo.js";
import IdInfo from "./Governmentids.js";
import VolatilityStrip2 from "../VolatilityStrip2.js";
import HorizontalBar from "../NewCibilScore.js";
import amountData from "./Amount/dummydataAmt.json";
import BarGraph from "./EnqBarGraph.js";
import AmtBarGraph from "./Amount/EnqBarGraph.js";
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

Modal.setAppElement('#root'); // Set app root for accessibility

const Personalinfo = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    navigate('/');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAmountModalOpen, setIsAmountModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAmountModal = () => setIsAmountModalOpen(true);
  const closeAmountModal = () => setIsAmountModalOpen(false);

  const enquiryCountData = [
    { id: 0, category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 8, enquiriesBeyond6Months: 78, total: 86 },
    { id: 1, category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 2, enquiriesBeyond6Months: 7, total: 9 },
    { id: 2, category: 'Other', enquiries3Months: 0, enquiries6Months: 3, enquiriesBeyond6Months: 29, total: 32 },
    { id: 3, category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 8, total: 8 },
    { id: 4, category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 5, total: 5 },
    { id: 5, category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 3, total: 3 },
    { id: 6, category: 'Total', enquiries3Months: 0, enquiries6Months: 13, enquiriesBeyond6Months: 130, total: 143 },
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
      <div className="flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr bg-gradient-to-tl to-bcgClr from-bgToClr text-white flex items-center">
            <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
            <div className="relative group">
              <button className="pr-4 py-2 hover:scale-105 active:scale-95" onClick={handleExitClick}>
                <ExitToAppIcon  
                  className="cursor-pointer transform rotate-180"
                  style={{ fontSize: '32px' }} 
                /> 
              </button>
              <div className="absolute top-1/2 left-0 transform -translate-x-full translate-y-1/8 mt-2 px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Back to Dashboard
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-0">
            <div className="bg-white rounded-lg w-[96%] shadow-xl p-2 m-5">
              <h2 className="text-center text-xl font-semibold m-3">Bureau Score</h2>
              <hr className="mb-4 border-gray-300" />
              <VolatilityStrip2 score={734} className="mb-4"/>
            </div>

            <div className="flex justify-evenly items-center p-4 mt-5 mb-5 w-full">
              <div className="bg-white rounded-lg shadow-xl pb-6 pt-4 pl-2 pr-2 mr-1 ml-2 w-1/2">
                <div className="flex justify-between items-center">
                  <h2 className="text-center text-xl font-semibold mb-4 flex-grow">Enquiry Count</h2>
                  <button onClick={openModal} className="mr-6">
                    <BarChartIcon className="hover:shadow-md hover:cursor-pointer mb-2 mr-2" />
                  </button>
                </div>
                <hr className="mb-6 border-gray-300" />
                {enquiryCountData.map((row) => (
                  <div key={row.id} className="cursor-pointer">
                    <HorizontalBar
                      id={row.id}
                      value1={row.enquiries3Months}
                      value2={row.enquiries6Months}
                      value3={row.enquiriesBeyond6Months}
                      value4={row.total}
                      head={row.category}
                      isEnquiry={true}
                      iscurrency={false}
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-xl pb-6 pt-4 pl-2 pr-2 mr-2 ml-1 w-1/2">
                <div className="flex justify-between items-center">
                  <h2 className="text-center text-xl font-semibold mb-4 flex-grow">Active Loan Amount</h2>
                  <button onClick={openAmountModal} className="mr-6">
                    <BarChartIcon className="hover:shadow-md hover:cursor-pointer mb-2 mr-2" />
                  </button>
                </div>
                <hr className="mb-6 border-gray-300" />
                {amountData.map((row) => (
                  <div key={row.category} className="cursor-pointer">
                    <HorizontalBar
                      id={row.id}
                      value1={row.guarantor}
                      value2={row.joint}
                      value3={row.individual}
                      value4={row.total}
                      head={row.category}
                      iscurrency={true}
                      isEnquiry={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Cards cardinfo={cardinfo} />
          <div className="p-4">
            <Contactinfo />
            <IdInfo />
          </div>
        </div>
      </div>

      {/* Modal for Enquiry Count BarGraph */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Enquiry Count Bar Graph Modal"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <div className="relative">
          <div className="flex justify-between items-center py-2">
            <div className="w-8"></div>
            <h2 className="text-center text-xl font-semibold flex-grow">Enquiry Count</h2>
            <IconButton
              onClick={closeModal}
              className="text-red-500"
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="mt-6">
            <BarGraph data={enquiryCountData} />
          </div>
        </div>
      </Modal>

      {/* Modal for Amount BarGraph */}
      <Modal
        isOpen={isAmountModalOpen}
        onRequestClose={closeAmountModal}
        contentLabel="Amount Bar Graph Modal"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <div className="relative">
          <div className="flex justify-between items-center py-2">
            <div className="w-8"></div>
            <h2 className="text-center text-xl font-semibold flex-grow">Active Loan Amount</h2>
            <IconButton
              onClick={closeAmountModal}
              className="text-red-500"
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="mt-6">
            <AmtBarGraph data={amountData} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Personalinfo;

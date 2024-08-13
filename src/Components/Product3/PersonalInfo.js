import React, { useState } from "react";
import Sidebar from "../Sidebar3";
import Cards from "../card.js";
import Contactinfo from "./Contactinfo.js";
import IdInfo from "./Governmentids.js";
import VolatilityGauge from "../VolatilityGauge.js";
import HorizontalBar from "../NewCibilScore.js";

import amountCountData from './Amount/dummydataAmtCnt.json';
import amountData from "./Amount/dummydataAmt.json";
import BarGraph from "./EnqBarGraph.js";
import AmtBarGraph from "./Amount/EnqBarGraph.js";
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

Modal.setAppElement('#root'); // Set app root for accessibility

// import amountCountData from './Amount/dummydataAmtCnt.json';
import amountData from "./Amount/dummydataAmt.json"
import BarChartIcon from '@mui/icons-material/BarChart';
import { useNavigate } from "react-router";


const Personalinfo = () => {
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

  const navigate=useNavigate()

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
        <div className="flex-1 overflow-y-auto ">
          <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 bg-bcgClr flex flex-col justify-center">
            <h1 className="text-white text-base md:text-lg lg:text-xl ml-4">JAY DIPAKKUMAR JHAVERI S/O DIPAK JHAVERI</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-0">

            <div className="rounded-lg shadow-2xl mt-8">
              <h2 className="text-left text-xl font-semibold m-4">Cibil Score</h2>
              <hr className="mb-6 border-gray-300" />
              <VolatilityGauge value={734} title={"Cibil Score:"} className="text-lg md:text-xl lg:text-2xl" />
            </div>

            <div className="flex justify-evenly items-center mt-10 mb-10">
              <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
                <h2 className="text-center text-xl font-semibold mb-4">Enquiry Count</h2>
                <hr className="mb-6 border-gray-300" />
                {enquiryCountData.map((row) => (
                  <div key={row.id} onClick={openModal} className="cursor-pointer">
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

              <div className="bg-white rounded-lg shadow-xl p-6 mx-8">
                <h2 className="text-center text-xl font-semibold mb-4">Amount</h2>
                <hr className="mb-6 border-gray-300" />
                {amountData.map((row) => (
                  <div key={row.category} onClick={openAmountModal} className="cursor-pointer">
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

            <div className="rounded-lg shadow-2xl mt-4">
             <h2 className="text-center text-xl font-semibold m-4">Cibil Score</h2>
             <hr className="mb-2 border-gray-300" />
              <VolatilityGauge value={734} title={"Your Cibil Score is:"} className="text-lg md:text-xl lg:text-2xl" />
            </div>

          <div className="flex justify-evenly items-center mt-10 mb-10">
            <div className="bg-white rounded-lg shadow-xl p-4 mx-8">
              <div className="flex">
              <h2 className="text-center text-xl font-semibold mb-4 flex-1">Enquiry Count</h2>
              <div title="See Graph">
              <BarChartIcon onClick={()=>{navigate(`/enquiry`)}} className="hover:shadow-md hover:scale-110 hover:cursor-pointer active:scale-95"/>
              </div>
              </div>
              <hr className="mb-2 border-gray-300" />
              
              {enquiryCountData.map((row) => (
                <HorizontalBar
                  id={row.id}
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

            {/* <div className="bg-white rounded-lg shadow-xl p-4 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Enquiry Amount</h2>
              <hr className="mb-2 border-gray-300" />
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
            </div> */}
          {/* </div>

          <div className="flex justify-evenly items-center my-10"> */}
            {/* <div className="bg-white rounded-lg shadow-xl p-4 mx-8">
              <h2 className="text-center text-xl font-semibold mb-4">Amount Count</h2>
              <hr className="mb-2 border-gray-300" />
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
            </div> */}
            <div className="bg-white rounded-lg shadow-xl p-4 mx-8">
            <div className="flex">
              <h2 className="text-center text-xl font-semibold mb-4 flex-1">Amount</h2>
              <div title="See Graph">
              <BarChartIcon  onClick={()=>{navigate(`/amount`)}} className="hover:shadow-md hover:scale-110 hover:cursor-pointer active:scale-95"/>
              </div>
              </div>
              <hr className="mb-2 border-gray-300" />
              {amountData.map((row) => (
                
                <HorizontalBar
                  id={row.id}
                  key={row.category} // Ensure key is unique for each item
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
          <IconButton
            onClick={closeModal}
            className="absolute top-2 right-2 text-red-500"
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <BarGraph data={enquiryCountData} />
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
          <IconButton
            onClick={closeAmountModal}
            className="absolute top-2 right-2 text-red-500"
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <AmtBarGraph data={amountData} />
        </div>
      </Modal>
    </div>
  );
}

export default Personalinfo;

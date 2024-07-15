// src/App.js
import React from 'react';
import CompanySection from './InvoiceMatchingSection';
import SalesSection from './SalesSection';
import CustomerChunks from './Customerchunk';
import { useLocation, useNavigate } from 'react-router-dom';
const Summary = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  if (!state || !state.borrowerData) {
    return null;
  }

  const { borrowerData } = state;

  const handleBackClick = () => {
    navigate(`/clients`);
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-bcgClr text-white mb-8 flex">
        <div className='text-xl py-2 px-4 mb-4 text-left '>
          <button className='px-2 py-2 hover:scale-105 active:scale-95' onClick={()=>{handleBackClick()}}>Back</button>
        </div>
        <h1 className="text-2xl py-4 px-4 mb-4 text-center font-bold flex-1">{borrowerData.borrower}</h1>
      </div>
      <CompanySection data={borrowerData} />
      {/* <SalesSection data={borrowerData} /> */}
      <CustomerChunks data={borrowerData} />
    </div>
  );
};

export default Summary;
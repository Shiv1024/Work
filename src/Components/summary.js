// src/App.js
import React from 'react';
import CompanySection from './InvoiceMatchingSection';
import SalesSection from './SalesSection';
import CustomerChunks from './Customerchunk';
import { useLocation } from 'react-router-dom';
const Summary = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.borrowerData) {
    return null;
  }

  const { borrowerData } = state;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-bcgClr text-white mb-8">
        <h1 className="text-2xl py-4 px-4 mb-4 text-center font-bold">{borrowerData.borrower}</h1>
      </div>
      <CompanySection data={borrowerData} />
      {/* <SalesSection data={borrowerData} /> */}
      <CustomerChunks data={borrowerData} />
    </div>
  );
};

export default Summary;
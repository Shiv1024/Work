// src/App.js
import React from 'react';
import CompanySection from './InvoiceMatchingSection';
import SalesSection from './SalesSection';

const Summary = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-bcgClr text-white  mb-8">
        <h1 className="text-2xl mb-4 text-center font-bold">Company Name</h1>
      </div>
      <CompanySection />
      <SalesSection />
    </div>
  );
};

export default Summary;

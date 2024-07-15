import React from 'react';
import CompanySection from './InvoiceMatchingSection';
import CustomerChunks from './Customerchunk';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Sidebar from './Sidebar';

const Summary = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  if (!state || !state.borrowerData) {
    return null; // Handle case where no data is passed
  }

  const { borrowerData } = state;

  const handleBackClick = () => {
    navigate(`/clients`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Fixed width for Sidebar */}
      <div className="flex-grow p-4 ml-32 md:ml-48 lg:ml-56"> {/* Main content with margin to accommodate Sidebar */}
        <div className="bg-bcgClr text-white mb-8 flex items-center">
          <div className="py-2 px-4 mb-4">
            <button className="mt-2 px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
              <ArrowBackIosIcon />
            </button>
          </div>
          <h1 className="text-2xl py-4 px-4 mb-4 font-bold mx-auto">{borrowerData.borrower}</h1>
        </div>
        {/* Additional sections */}
        <CompanySection data={borrowerData} />
        <CustomerChunks data={borrowerData} />
      </div>
    </div>
  );
};

export default Summary;

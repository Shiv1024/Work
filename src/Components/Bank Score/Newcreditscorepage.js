import React, { useState } from 'react';
import Sidebar from '../Sidebar2';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VolatilityGauge from '../VolatilityGauge';
import SemiCircularChart from '../SemiCircularChart';

const Creditscore = () => {
  return (
    <>
      <div className="flex">
        <div className='flex-none'>
          <Sidebar />
        </div>
        <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-row justify-center items-center mt-0">
          <div className="relative rounded-lg shadow-2xl mt-8">
            <h2 className="text-left text-xl font-semibold m-4">Final Score</h2>
            <button
              className="absolute right-4 top-4 text-gray-600 hover:text-blue-600"
              title="Bank Statement Score: 607.4 &#013; GST Score: 650.44 &#013; Cibil Score Score: 73 "
            >
              <InfoOutlinedIcon />
            </button>
            <hr className="mb-6 border-gray-300" />
            <VolatilityGauge value={625} title={"Final Score:"} className="text-lg md:text-xl lg:text-2xl" />
          </div>
          <div className="relative rounded-lg shadow-2xl mt-8 ml-3">
            <h2 className="text-left text-xl font-semibold m-4">Maximum Emi Possible</h2>
            <hr className="mb-6 border-gray-300" />
            {/* <VolatilityGauge value={203417} title={"Maximum Emi Possible:"} color={"black"} className="text-lg md:text-xl lg:text-2xl" /> */}

            <SemiCircularChart value={203417} title={""}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creditscore;

import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VolatilityGauge from '../VolatilityGauge';
import SemiCircularChart from '../SemiCircularChart';

const Creditscore = () => {
  return (
    <div className="flex justify-center items-start mt-4 bg-gradient-to-br from-white to-blue-100 min-h-screen">
    {/* <div className="flex justify-center items-start mt-4"> */}
      <div className="relative rounded-lg bg-white shadow-md m-3" style={{ flex: '0 1 auto' }}>
        <h2 className="text-left text-xl font-semibold m-4">Final Score</h2>
        <button
          className="absolute right-4 top-4 text-gray-600 hover:text-blue-600"
          title={`Bank Statement Score: 607.4\nGST Score: 650.44\nCibil Score: 734`}
        >
          <InfoOutlinedIcon />
        </button>
        <hr className="mb-6 border-gray-300" />
        <VolatilityGauge
          value={625}
          title={"Final Score:"}
          className="text-lg md:text-xl lg:text-2xl"
        />
      </div>
      <div className="relative rounded-lg bg-white shadow-md m-3" style={{ flex: '0 1 auto' }}>
        <h2 className="text-left text-xl font-semibold m-4">Maximum Emi Possible</h2>
        <hr className="mb-6 border-gray-300" />
        <SemiCircularChart value={203417} title={""} />
      </div>
      <div className="relative bg-white rounded-lg shadow-md m-3 max-w-xl" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl">
            <p>Drawbacks</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-sm text-gray-600">
            <p>1. Ratio of Loan credit and Total credit is more than 30%</p>
            <p>2. GST sales contribution of 80% by 5 customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creditscore;

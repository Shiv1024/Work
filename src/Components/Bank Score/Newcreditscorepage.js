import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VolatilityGauge from '../VolatilityGauge';
import SemiCircularChart from '../SemiCircularChart';
import Sidebar from '../Sidebar2';

const Creditscore = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
    
    <div className="flex flex-col justify-center  items-center ml-20 pt-5 bg-gradient-to-br from-white to-blue-100 min-h-screen">
    {/* <div className="flex justify-center items-start mt-4"> */}
      <div className='flex'>
      <div className="relative rounded-lg bg-white shadow-md w-96 m-3" style={{ flex: '0 1 auto' }}>
        <h2 className="text-left text-xl font-semibold m-4">Final Score</h2>
        {/* <button
          className="absolute right-4 top-4 text-gray-600 hover:text-blue-600"
          title={`Bank Statement Score: 607.4\nGST Score: 650.44\nCibil Score: 734`}
        >
          <InfoOutlinedIcon />
        </button> */}
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
      </div>

    <div className='flex'>
    <div className="relative bg-white rounded-lg shadow-md m-3 w-60" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 h-full border-blue-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl text-center">
            <p>Bank Statement</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          607.4
          
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-3 w-60" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 h-full border-green-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl text-center">
            <p>GST</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          650.44
          
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-3 w-60" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 h-full border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl text-center">
            <p>Bureau Score</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          734
          
          </div>
        </div>
      </div>
    </div>


      <div className='flex'>

      {/* <div className="relative bg-white rounded-lg shadow-md m-3 max-w-96" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl">
            <p>Drawbacks</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-sm text-gray-600 h-full">
            1. Ratio of Loan credit and Total credit is more than 30%
            2. GST sales contribution of 80% by 5 customers
          </div>
        </div>
      </div> */}

      <div className="relative bg-white rounded-lg shadow-md m-3 max-w-96" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl">
            <p>Remarks</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus quaerat exercitationem at minus architecto unde odio, delectus consequatur nam.
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-3 max-w-96" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 h-full border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-bold text-xl">
            <p>Drawbacks</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-sm text-gray-600">
          1. Ratio of Loan credit and Total credit is more than 30% <br />
          2. GST sales contribution of 80% by 5 customers
          
          </div>
        </div>
      </div>

      
      </div>

    </div>
    </div>
  );
};

export default Creditscore;

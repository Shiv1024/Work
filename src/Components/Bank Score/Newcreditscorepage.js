import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate} from "react-router-dom";
import VolatilityGauge from '../VolatilityGauge';
import SemiCircularChart from '../SemiCircularChart';
import Sidebar from '../Sidebar2';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Creditscore = () => {
  const navigate=useNavigate();

  return (
    <div className="flex min-h-screen">  
        <Sidebar/>
      <div className='flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-x-hidden'>
        <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr bg-gradient-to-tl to-bcgClr from-bgToClr text-white flex items-center">
                <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
                <div className="relative group">
           <button className="pr-4 py-2 hover:scale-105 active:scale-95">
             <ExitToAppIcon  
               className="cursor-pointer transform rotate-180"
               style={{ fontSize: '32px' }} 
               onClick={() => navigate('/')} 
             /> 
           </button>
           <div className="absolute top-1/2 left-0 transform -translate-x-full translate-y-1/8 mt-2 px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Back to Dashboard
              </div>
        </div>
      </div>

    <div className="flex flex-col mt-3 bg-mainClr from-white to-blue-100">
    {/* <div className="flex justify-center items-start mt-4"> */}
      <div className='flex w-full justify-center'>
      <div className="relative rounded-lg bg-white shadow-md w-2/5 m-3 mt-0" style={{ flex: '0 1 auto' }}>
        {/* <h2 className="text-center text-lg font-semibold m-4">Final Score</h2> */}
      
        {/* <hr className="mb-3 border-gray-300" /> */}
        <VolatilityGauge
          value={625}
          title={"Final Score:"}
          className="text-lg md:text-xl lg:text-2xl"
        />
      </div>
      <div className="relative rounded-lg bg-white shadow-md w-2/5 m-3 mt-0" style={{ flex: '0 1 auto' }}>
        {/* <h2 className="text-center text-lg font-semibold m-4">Maximum EMI Possible</h2> */}
        {/* <hr className="mb-3 border-gray-300" /> */}
        <SemiCircularChart value={203417} title={""} />
      </div>
      </div>

    <div className='flex w-full justify-center'>
    <div className="relative bg-white rounded-lg shadow-md m-2 w-[26.5%]" style={{ flex: '0 1 auto' }}>
        <div className="p-3 bg-white rounded-lg shadow-lg border-l-4 h-full border-blue-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-semibold text-xl text-center">
            <p>Bank Statement</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          607.4
          
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-2 w-[26.5%]" style={{ flex: '0 1 auto' }}>
        <div className="p-3 bg-white rounded-lg shadow-lg border-l-4 h-full border-green-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-semibold text-xl text-center">
            <p>GST</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          650.44
          
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-2 w-[26.5%]" style={{ flex: '0 1 auto' }}>
        <div className="p-3 bg-white rounded-lg shadow-lg border-l-4 h-full border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-semibold text-xl text-center">
            <p>Bureau Score</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-4xl text-center text-gray-600">
          734
          
          </div>
        </div>
      </div>
    </div>


      <div className='flex w-full justify-center'>

      <div className="relative bg-white rounded-lg shadow-md m-3 w-[40%]" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white  rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-semibold text-lg">
            <p>Remarks</p>
          </div>
          <hr className="my-3 border-gray-300" />
          <div className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus quaerat exercitationem at minus architecto unde odio, delectus consequatur nam.
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-md m-3 w-[40%]" style={{ flex: '0 1 auto' }}>
        <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 h-full border-red-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="font-semibold text-lg">
            <p>Drawbacks</p>
          </div>
          <hr className="my-3 border-gray-300" />
          <div className="text-sm text-gray-600">
          1. Ratio of Loan credit and Total credit is more than 30% <br />
          2. GST sales contribution of 80% by 5 customers
          
          </div>
        </div>
      </div>

      
      </div>

    </div>
    </div>
    </div>
  );
};

export default Creditscore;

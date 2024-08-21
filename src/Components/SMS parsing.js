import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Sidebar from './Sidebar4.js'
import DiffTable from "./DiffTables2.js";
import dataJson from "../Assets/sms_sample_json (1).json"
const SMSParsing = () => {
  const [data,setdata]=useState(dataJson);
  console.log(data);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-x-hidden">
        <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr text-white flex items-center">
          <h1 className="text-white text-2xl py-4 px-4 mb-4 font-medium mx-auto">SMS Details</h1>
        </div>
        <div className="flex-1 px-8 py-4 overflow-y-auto">
          <DiffTable data={data.analyse} title="Analytics" />
          {console.log(data.analyse)}
          <DiffTable data={data.bankDetails} title="Bank Details" />
          <DiffTable data={data.partyDetails} title="Party Details" />
          <DiffTable data={data.investment} title="Investments" />
          <DiffTable data={data.overdue} title="Overdue" />
          <DiffTable data={data.premium} title="Premium" />
          <DiffTable data={data.loanDetails} title="Loan Details" />
          <DiffTable data={data.emiDetails} title="EMI Details" />
          <DiffTable data={data.emiReminders} title="EMI Reminders" />
          <DiffTable data={data.emiOverdue} title="EMI Overdue" />
          </div>
      </div>
    </div>
  );
};

export default SMSParsing;

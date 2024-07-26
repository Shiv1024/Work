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
      <div className="flex-grow p-4 ml-32 md:ml-48 lg:ml-56">
        <div className="bg-bcgClr text-white mb-8 flex items-center">
          <h1 className="text-2xl py-4 px-4 mb-4 font-bold mx-auto">SMS Details</h1>
        </div>
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
  );
};

export default SMSParsing;

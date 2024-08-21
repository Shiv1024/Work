import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Sidebar from './Sidebar';
import DiffTable from "./DiffTables.js";

const Page = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(`/clients`);
  };
  const periodData = [
    { inclusions: 'Oct 2023 to Feb 2024', measure: null, historicalTrend: 'Oct 2023 to Jan 2024', currentMonthResponse: 'Feb 2024', remarks: 'If Feb 2024 NA, last available month data used' }
  ];
  const fillingData = [
    { inclusions: 'Timely filings', measure: 'GST 1B', historicalTrend: 'On Time', currentMonthResponse: 'On Time', remarks: 'IRIS Data' },
    { inclusions: 'Timely filings', measure: 'GST 3B', historicalTrend: 'All Delayed', currentMonthResponse: 'Late', remarks: 'IRIS Data' },
    { inclusions: 'Late Fee Paid Trend', measure: 'MOM Late fee trend', historicalTrend: '2 out of 4', currentMonthResponse: 'Yes', remarks: 'AA Data' },
    { inclusions: 'Late Fee Paid', measure: 'Total Amount for duration', historicalTrend: '83,398.07', currentMonthResponse: '307.82', remarks: 'AA Data' },
    { inclusions: 'ITC', measure: 'Total Tax Paid', historicalTrend: '1,23,32,616.01', currentMonthResponse: '57,09,731.99', remarks: '' },
    { inclusions: 'ITC', measure: 'Total Cash Paid', historicalTrend: '33,58,258', currentMonthResponse: '21,16,850', remarks: '' },
    { inclusions: 'ITC', measure: 'Total ITC Paid', historicalTrend: '1,01,91,466', currentMonthResponse: '44,92,623', remarks: '' },
    { inclusions: 'ITC', measure: '% of Tax Paid through ITC', historicalTrend: '82.63%', currentMonthResponse: '78.68%', remarks: '' },
    { inclusions: 'Total No.GSTINs', measure: 'No. of total GST associated with Borrower', historicalTrend: '2', currentMonthResponse: '1', remarks: '' },
    { inclusions: 'No. of GSTINs turned to inactive', measure: 'No. of total GST status as inactive', historicalTrend: '1', currentMonthResponse: '1', remarks: '09AAIFB4104G1ZS is inactive' },
    { inclusions: 'No. of new GSTIN added by borrower', measure: '', historicalTrend: '', currentMonthResponse: '', remarks: 'None' },
  ];
  const customersData = [
    { inclusions: 'Top Customers by Value', measure: 'By Invoice amount', historicalTrend: '5 (around 60% Value, 40% Count)', currentMonthResponse: 'In line', remarks: '58% Saliency' },
    { inclusions: 'PANASONIC LIFE SOLUTIONS INDIA PRIVATE LIMITED', measure: 'AAECA2190C', historicalTrend: '13%', currentMonthResponse: '13%', remarks: 'Saliency for the month' },
    { inclusions: 'R D ENTERPRISES', measure: 'AARFR5825K', historicalTrend: '14%', currentMonthResponse: '11%', remarks: 'Saliency for the month' },
    { inclusions: 'DHANVANTI ENTERPRISES', measure: 'ABXPK6909J', historicalTrend: '16%', currentMonthResponse: '15%', remarks: 'Saliency for the month' },
    { inclusions: 'A.R.D. ENTERPRISES', measure: 'BQBPK9912M', historicalTrend: '12%', currentMonthResponse: '16%', remarks: 'Saliency for the month' },
    { inclusions: 'MATHAJI MARKETING', measure: 'CEOPC6626N', historicalTrend: '6%', currentMonthResponse: '3%', remarks: 'Saliency for the month' },
    { inclusions: 'Top Customers by Frequency', measure: 'Appearing in maximum number of months', historicalTrend: '26 (Sales in All Months, 78% by Count)', currentMonthResponse: 'In line', remarks: '74% by count' },
    { inclusions: 'Customer churn', measure: 'Probability of customer to leave', historicalTrend: '11%', currentMonthResponse: '-29%', remarks: 'Monthly crest and trough' },
    { inclusions: 'No. of unique customers per month', measure: 'Number of customers per month', historicalTrend: '41', currentMonthResponse: '16', remarks: null },
    { inclusions: 'Forecast number of customers', measure: 'M1', historicalTrend: null, currentMonthResponse: '65', remarks: 'Limited Input.' },
    { inclusions: 'Forecast number of customers', measure: 'M2', historicalTrend: null, currentMonthResponse: '45', remarks: 'Limited Input.' },
    { inclusions: 'Forecast number of customers', measure: 'M3', historicalTrend: null, currentMonthResponse: '55', remarks: 'Limited Input.' }
  ];

  const salesData = [

    { inclusions: 'Invoice value Total', measure: 'Cumulative Monthly Invoice value shared INR Lakhs', historicalTrend: '1787.94', currentMonthResponse: '449.22', remarks: '5 Months' },
    { inclusions: 'Invoice value Total', measure: 'Average Monthly Invoice value in INR Lakhs', historicalTrend: '357.59', currentMonthResponse: '449.22', remarks: null },
    { inclusions: 'Monthwise Invoice value', measure: 'Average', historicalTrend: '1,30,697.70', currentMonthResponse: '1,45,378.96', remarks: null },
    { inclusions: 'Monthwise Invoice value', measure: 'Average without outlier value', historicalTrend: '1,24,792.76', currentMonthResponse: '1,40,105.91', remarks: null },
    { inclusions: 'Outlier Months', measure: 'Month with very high crest or trough', historicalTrend: 'Quarter end, year End', currentMonthResponse: 'Yes', remarks: 'High Year End General Practise' },
    { inclusions: 'Outlier Months Count', measure: 'Number of months with very high crest or trough', historicalTrend: '0', currentMonthResponse: '2', remarks: 'Jan, Feb' },
    { inclusions: 'Sales trend- volatility', measure: 'Standard deviation', historicalTrend: null, currentMonthResponse: '0.53', remarks: 'Medium Variance' },
    { inclusions: 'Forecast', measure: 'Forecast for next 3 months - M1, INR Lakhs', historicalTrend: '430 - 460', currentMonthResponse: null, remarks: 'Tentative, Limited Data' },
    { inclusions: 'Forecast', measure: 'Forecast for next 3 months - M2, INR Lakhs', historicalTrend: '260 - 300', currentMonthResponse: null, remarks: 'Tentative, Limited Data' },
    { inclusions: 'Forecast', measure: 'Forecast for next 3 months - M3, INR Lakhs', historicalTrend: '310 - 340', currentMonthResponse: null, remarks: 'Tentative, Limited Data' }
  ];

  const invoicesData = [
    { inclusions: 'Invoice Count of Borrower', measure: 'By count', historicalTrend: '1368', currentMonthResponse: '309', remarks: 'Breezalit AA GST Data' },
    { inclusions: 'Match invoice number of Borrower with input from Credable', measure: 'No. of matches by count', historicalTrend: '28', currentMonthResponse: '9', remarks: null },
    { inclusions: 'Match invoice Value of Borrower with input from Credable', measure: 'Amount matched', historicalTrend: '1,56,50,245.60', currentMonthResponse: '59,93,680.20', remarks: null }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr bg-gradient-to-tl to-bcgClr from-bgToClr text-white flex items-center">
            <div className="p-4">
               <button className="px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
                 <ArrowBackIosIcon />
               </button>
            </div>
             <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
        </div>
        <div className='px-8 py-4'>
        <DiffTable 
        Name = "Period"
        Data = {periodData}
        />
        <DiffTable 
        Name = "Filings"
        Data = {fillingData}
        />
        <DiffTable 
        Name = "Customers"
        Data = {customersData}
        />
        <DiffTable 
        Name = "Sales"
        Data = {salesData}
        />
        <DiffTable 
        Name = "Invoices"
        Data = {invoicesData}
        />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;

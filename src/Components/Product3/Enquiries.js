import React from "react";
import Sidebar from "../Sidebar3.js";
import Table from './Table4.js';
import BarGraph from './EnqBarGraph.js';

function Enquiries() {
  const enquiryCountData = [
    { category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 8, enquiriesBeyond6Months: 78, total: 86 },
    { category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 2, enquiriesBeyond6Months: 7, total: 9 },
    { category: 'Other', enquiries3Months: 0, enquiries6Months: 3, enquiriesBeyond6Months: 29, total: 32 },
    { category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 8, total: 8 },
    { category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 5, total: 5 },
    { category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 3, total: 3 },
    { category: 'Total', enquiries3Months: 0, enquiries6Months: 13, enquiriesBeyond6Months: 130, total: 143 },
  ];
  const enquiryAmountData = [
    { category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 15500000, enquiriesBeyond6Months: 158641199, total: 174141199},
    { category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 600000, enquiriesBeyond6Months: 84000, total: 684000 },
    { category: 'Other', enquiries3Months: 0, enquiries6Months: 30000000, enquiriesBeyond6Months: 75703310, total: 105703310 },
    { category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 131246000, total: 131246000 },
    { category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 9719000, total: 9719000 },
    { category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 23555000, total: 23555000 },
    { category: 'Total', enquiries3Months: 0, enquiries6Months: 46100000, enquiriesBeyond6Months: 398948509, total: 445048509 },
  ];

  return (
    <div className="flex">
      <div className='flex-none'>
        <Sidebar />
      </div>
      <div className="ml-32 md:ml-48 lg:ml-56 w-full flex flex-col items-center justify-center mt-4 p-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Enquiry Count</h1>
          <div className="overflow-x-auto">
            <Table data={enquiryCountData} />
          </div>
          <div className="overflow-x-auto mt-4">
            <BarGraph data={enquiryCountData} />
          </div>
        </div>
        <div className="max-w-4xl w-full mt-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Enquiry Amount</h1>
          <div className="overflow-x-auto">
            <Table data={enquiryAmountData} />
          </div>
          <div className="overflow-x-auto mt-4">
            <BarGraph data={enquiryAmountData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiries;

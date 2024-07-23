import React from "react";
import Sidebar from "../Sidebar3.js";
import Table from './Table4.js';
import BarGraph from './EnqBarGraph.js';
import amountCountData from './../../Assets/dummydataAmtCnt.json'

import AmountData from './../../Assets/dummydataAmt.json'

function Amounts() {
  // const amountCountData = [
  //   { category: 'Business Loan', Guarantor: 0, Individual: 8, Joint: 78, total: 86 },
  //   { category: 'Credit Card', Guarantor: 0, Individual: 2, Joint: 7, total: 9 },
  //   { category: 'Other', Guarantor: 0, Individual: 3, Joint: 29, total: 32 },
  //   { category: 'Asset Loan', Guarantor: 0, Individual: 0, Joint: 8, total: 8 },
  //   { category: 'Personal Loan', Guarantor: 0, Individual: 0, Joint: 5, total: 5 },
  //   { category: 'Working Capital Limit', Guarantor: 0, Individual: 0, Joint: 3, total: 3 },
  //   { category: 'Total', Guarantor: 0, Individual: 13, Joint: 130, total: 143 },
  // ];
  // const AmountData = [
  //   { category: 'Business Loan', Guarantor: 0, Individual: 15500000, Joint: 158641199, total: 174141199},
  //   { category: 'Credit Card', Guarantor: 0, Individual: 600000, Joint: 84000, total: 684000 },
  //   { category: 'Other', Guarantor: 0, Individual: 30000000, Joint: 75703310, total: 105703310 },
  //   { category: 'Asset Loan', Guarantor: 0, Individual: 0, Joint: 131246000, total: 131246000 },
  //   { category: 'Personal Loan', Guarantor: 0, Individual: 0, Joint: 9719000, total: 9719000 },
  //   { category: 'Working Capital Limit', Guarantor: 0, Individual: 0, Joint: 23555000, total: 23555000 },
  //   { category: 'Total', Guarantor: 0, Individual: 46100000, Joint: 398948509, total: 445048509 },
  // ];

  return (
    <div className="flex">
      <div className='flex-none'>
        <Sidebar />
      </div>
      <div className="ml-32 md:ml-48 lg:ml-56 w-full flex flex-col items-center justify-center mt-4 p-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Amount Count</h1>
          <div className="overflow-x-auto">
            <Table data={amountCountData} type='count' />
          </div>
          <div className="overflow-x-auto">
            <BarGraph data={amountCountData} />
          </div>
        </div>
        <div className="max-w-4xl mt-4 w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Amount</h1>
          <div className="overflow-x-auto">
            <Table data={AmountData} />
          </div>
          <div className="overflow-x-auto">
            <BarGraph data={AmountData} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Amounts;

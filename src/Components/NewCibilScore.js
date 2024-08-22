import React, { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import amountCountData from '../Components/Product3/Amount/dummydataAmtCnt.json';
import numeral from 'numeral';
const HorizontalBar = (props) => {

  const width1 = `${(props.value1 / props.value4) * 100}%`;
  const width2 = `${(props.value2 / props.value4) * 100}%`;
  const width3 = `${(props.value3 / props.value4) * 100}%`;

  // console.log(width1);
  // console.log(width2);
  // console.log(width3);
  // console.log(width1+width2+width3);

  console.log(props.iscurrency);

  // Format values as currency if isCurrency is true
  const formatCurrency = (value) => {
    if (value === null || value === undefined) return '-';
    // return `₹${parseFloat(value).toLocaleString()}`;
    return new Intl.NumberFormat('en-IN').format(value);
  };
    
  const formatNumber = (num) => {
    const absNum = Math.abs(num);
    if (absNum >= 100000) {
      return numeral(num / 100000).format('0') + 'L';
    } 
    else if (absNum >= 1000) {
      return numeral(num / 1000).format('0') + 'K';
    } 
    else {
      return numeral(num).format('0,0');
    }
  };

  const displayValue1 = props.iscurrency ? formatNumber(props.value1) : props.value1;
  const displayValue2 = props.iscurrency ? formatNumber(props.value2) : props.value2;
  const displayValue3 = props.iscurrency ? formatNumber(props.value3) : props.value3;
  const displayValue4 = props.iscurrency ? formatNumber(props.value4) : props.value4;

  const enquiryAmountData = [
    { id:0,category: 'Business Loan', enquiries3Months: 0, enquiries6Months: 15500000, enquiriesBeyond6Months: 158641199, total: 174141199 },
    { id:1,category: 'Credit Card', enquiries3Months: 0, enquiries6Months: 600000, enquiriesBeyond6Months: 84000, total: 684000 },
    { id:2,category: 'Other', enquiries3Months: 0, enquiries6Months: 30000000, enquiriesBeyond6Months: 75703310, total: 105703310 },
    { id:3,category: 'Asset Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 131246000, total: 131246000 },
    { id:4,category: 'Personal Loan', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 9719000, total: 9719000 },
    { id:5,category: 'Working Capital Limit', enquiries3Months: 0, enquiries6Months: 0, enquiriesBeyond6Months: 23555000, total: 23555000 },
    { id:6,category: 'Total', enquiries3Months: 0, enquiries6Months: 46100000, enquiriesBeyond6Months: 398948509, total: 445048509 },
  ];

  const categoryData = enquiryAmountData.find(item => item.id === props.id);
  const amountcount=amountCountData.find(item => item.id === props.id);
  return (
    <div>
      <div className='py-3 px-3'>
        {props.head}
      </div>
      <div className="flex">
      <div style={{ width: '85%', height: '5px', display: 'flex' }} className='pl-3 pr-2 cursor-pointer'>
        <Tooltip title={`${props.isEnquiry ? `Enquiries in 3 Months: ${displayValue1} ${categoryData?`(${formatNumber(categoryData.enquiries3Months)})`: ''}   `: `Guarantor: ${displayValue1} ${amountcount?`(${amountcount.guarantor})`:''}`}  `} arrow>
          <div 
            style={{ width: width1, backgroundColor: '#e76261' }} 
            className='hover:shadow-lg' 
          ></div>
        </Tooltip>
        <Tooltip title={`${props.isEnquiry ? `Enquiries in 6 Months: ${displayValue2} ${categoryData?`(${formatNumber(categoryData.enquiries6Months)})`: ''}   `: `Joint: ${displayValue2} ${amountcount?`(${amountcount.joint})`:''}`}  `} arrow>
          <div 
            style={{ width: width2, backgroundColor: '#FFBF00' }} 
            className='hover:shadow-lg' 
          ></div>
        </Tooltip>
        <Tooltip title={`${props.isEnquiry ? `Enquiries beyond 6 Months: ${displayValue3} ${categoryData?`(${formatNumber(categoryData.enquiriesBeyond6Months)})`: ''}   ` : `Individual: ${displayValue3} ${amountcount?`(${amountcount.individual})`:''}`}  `} arrow>
          <div 
            style={{ width: width3, backgroundColor: '#33c294' }} 
            className='hover:shadow-lg' 
          ></div>
        </Tooltip>
        </div>
        <div className='-my-2  ml-2 text-left'>
          Total:&nbsp;{(props.iscurrency)?`₹${displayValue4}`:displayValue4}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;

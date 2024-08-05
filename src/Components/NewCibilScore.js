import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

const HorizontalBar = ({ value1, value2, value3, value4, head, iscurrency, isEnquiry }) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // Calculate widths as percentages
  const width1 = `${(value1 / value4) * 100}%`;
  const width2 = `${(value2 / value4) * 100}%`;
  const width3 = `${(value3 / value4) * 100}%`;

  // Format values as currency if isCurrency is true
  const formatCurrency = (value) => {
    if (value === null || value === undefined) return '-';
    return `₹${parseFloat(value).toLocaleString()}`;
  };

  const displayValue1 = iscurrency ? formatCurrency(value1) : value1;
  const displayValue2 = iscurrency ? formatCurrency(value2) : value2;
  const displayValue3 = iscurrency ? formatCurrency(value3) : value3;
  const displayValue4 = iscurrency ? formatCurrency(value4) : value4;

  return (
    <div>
      <div className='py-3 px-3'>
        {head}
      </div>
      <div style={{ width: '480px', height: '8px', display: 'flex' }} className='px-2 cursor-pointer'>
        <Tooltip title={`${isEnquiry === true ? "Enquiries in 3 Months" : "Guarantor"}: ${displayValue1}`} arrow>
          <div 
            style={{ width: width1, backgroundColor: '#e76261' }} 
            className='hover:shadow-lg hover:scale-105' 
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          ></div>
        </Tooltip>
        <Tooltip title={`${isEnquiry === true ? "Enquiries in 6 Months" : "Joint"}: ${displayValue2}`} arrow>
          <div 
            style={{ width: width2, backgroundColor: '#FFBF00' }} 
            className='hover:shadow-lg hover:scale-105' 
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          ></div>
        </Tooltip>
        <Tooltip title={`${isEnquiry === true ? "Enquiries beyond 6 Months" : "Individual"}: ${displayValue3}`} arrow>
          <div 
            style={{ width: width3, backgroundColor: '#33c294' }} 
            className='hover:shadow-lg hover:scale-105' 
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          ></div>
        </Tooltip>
        <div className='-my-2 px-5'>
          Total:&nbsp;{displayValue4}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;

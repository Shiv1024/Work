import React, { useState } from 'react';

const HorizontalBar = ({ value1, value2, value3, value4, head }) => {
  // Ensure the values sum up to 100 or less
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const total = value1 + value2 + value3;
  if (total > 100) {
    console.error("Total value exceeds 100");
    return null;
  }



  // Calculate widths as percentages
  const width1 = `${(value1 / value4) * 100}%`;
  const width2 = `${(value2 / value4) * 100}%`;
  const width3 = `${(value3 / value4) * 100}%`;

  return (
    
    <>
    <div className='py-3 px-3'>
        {head}
    </div>
    <div style={{ width: '30%', height: '10px', display: 'flex' }} className='px-2'>
      <div style={{ width: width1, backgroundColor: '#e76261' }} className='hover:shadow-lg hover:scale-105 ' onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}></div>
      <div style={{ width: width2, backgroundColor: '#FFBF00' }} className='hover:shadow-lg hover:scale-105 ' onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}></div>
      <div style={{ width: width3, backgroundColor: '#33c294' }} className='hover:shadow-lg hover:scale-105 ' onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}></div>
        <div className='-my-2 px-5'>
            Total:&nbsp;{value4}
        </div>
    </div>
    <div style={{ width: '30%', height: '10px', display: 'flex' }} className='px-2'>
    {isHovered1 && (<div style={{ height:'3vw', color:'white', padding:'1vw', backgroundColor: 'black' }} className='opacity-80 mt-1'>Guarantor: {value1}</div> )}
    {isHovered2 && (<div style={{ height:'3vw', color:'white', padding:'1vw', backgroundColor: 'black' }} className='opacity-80 mx-16 mt-1'>Joint: {value2}</div> )}
    {isHovered3 && (<div style={{ width:'20vw',height:'3vw', color:'white', padding:'1vw', backgroundColor: 'black' }} className='opacity-80 mt-1 mx-48 '>Individual:{value3}</div> )}
    </div>
    </>
  );
};

export default HorizontalBar;

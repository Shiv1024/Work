import React from 'react';
import numeral from 'numeral';
import Tooltip from '@mui/material/Tooltip';

const formatNumber = (num) => {
  const absNum = Math.abs(num);

  if (absNum >= 1000000000) {
    return numeral(num / 1000000000).format('0.0') + ' billion';
  } else if (absNum >= 10000000) {
    return numeral(num / 10000000).format('0.0') + ' cr';
  } else if (absNum >= 100000) {
    return numeral(num / 100000).format('0.0') + 'L';
  } else if (absNum >= 1000) {
    return numeral(num / 1000).format('0.0') + 'k';
  } else {
    return numeral(num).format('0,0');
  }
};
const Card = ({ number, text }) => {
  // Precompute the tooltip text
  const tooltipText = typeof number === 'string' ? number : numeral(number).format('0,0');

  return (
    <div className="relative mt-2 mb-2 p-4 bg-white rounded shadow-lg text-center border border-blue-500 hover:shadow-2xl transition-shadow duration-300">
      <div className="relative group">
        <Tooltip title={tooltipText} placement="bottom">
          <div className="text-3xl font-bold cursor-pointer">
          {typeof number === 'string' ? number : formatNumber(number)}
          </div>
        </Tooltip>
      </div>
      <div className="mt-5 text-xl">
        <p>{text}</p>
      </div>
    </div>
  );
};


const Cards = ({ cardinfo }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {cardinfo.map((num, index) => (
      <Card key={index} number={num.value} text={num.label} />
    ))}
  </div>
);

export default Cards;

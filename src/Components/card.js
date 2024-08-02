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
    <div className="relative mt-2 mb-2 p-4 bg-white rounded-lg shadow-lg border-l-4 border-brdr-green hover:shadow-2xl transition-shadow duration-300">
      <div className="mt-2 font-bold text-xl">
        <p>{text}</p>
      </div>
      <div className="relative group mt-1 flex items-center">
        <Tooltip title={tooltipText} placement="bottom">
          <div className="text-lg font-bold cursor-pointer">
            {typeof number === 'string' ? number : formatNumber(number)}
          </div>
        </Tooltip>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="text-sm text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptatum doloremque in perferendis atque voluptatem suscip</p>
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

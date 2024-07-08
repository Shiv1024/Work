import React from 'react';
import numeral from 'numeral';

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

const Card = ({ number }) => (
  <div className="relative m-4 p-9 bg-white rounded shadow-lg text-center border border-blue-500">
    <div className="text-3xl font-bold">
      {formatNumber(number)}
    </div>
    <div className="absolute inset-9 ml-20 mr-20 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-800 bg-opacity-75 text-white text-xl font-bold">
      {numeral(number).format('0,0')}
    </div>
  </div>
);

const Cards = () => {
  const numbers = [22114101, 4500, 12000, 30000000, 150, 7600, 90000000, 123456, 9520000400];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {numbers.map((num, index) => (
        <Card key={index} number={num} />
      ))}
    </div>
  );
};

export default Cards;

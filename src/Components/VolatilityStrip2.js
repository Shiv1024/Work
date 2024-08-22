import React from 'react';

const VolatilityStrip2 = ({ score }) => {
  // Determine the width of the color blocks based on the score's range
  const getWidth = () => {
    if (score <= 499) return 'w-1/4'; // Red block
    if (score <= 649) return 'w-1/4'; // Yellow block
    if (score <= 749) return 'w-1/4'; // Blue block
    return 'w-1/4'; // Green block
  };

  const getTextColor = () => {
    if (score <= 499) return 'text-red-500'; // Poor
    if (score <= 649) return 'text-yellow-500'; // Fair
    if (score <= 749) return 'text-blue-500'; // Good
    return 'text-green-500'; // Excellent
  };

  // Determine the category based on the score's range
  const getCategory = () => {
    if (score <= 499) return 'Poor';
    if (score <= 649) return 'Fair';
    if (score <= 749) return 'Good';
    return 'Excellent';
  };

  // Calculate the position based on the score's range
  const getPosition = () => {
    if (score <= 499) return 'left-0'; // Centered in the red block
    if (score <= 649) return 'left-1/4'; // Centered in the yellow block
    if (score <= 749) return 'left-1/2'; // Centered in the blue block
    return 'left-3/4'; // Centered in the green block
  };

  return (
    <div className="flex flex-col items-center">
    <div className="relative w-full h-8 flex">
      <div className="w-1/4 h-full bg-red-500"></div>
      <div className="w-1/4 h-full bg-yellow-500"></div>
      <div className="w-1/4 h-full bg-blue-500"></div>
      <div className="w-1/4 h-full bg-green-500"></div>
      <div
        className={`absolute ${getPosition()} transform top-1/2 -translate-y-1/2 text-white font-bold text-center ${getWidth()}`}
      >
        {score}
      </div>
    </div>
    <div className="text-center text-lg font-semibold bg-white p-2 rounded">
        <span className="text-black">Your Bureau Score is: </span>
        <span className={`font-bold ${getTextColor()}`}>
          {getCategory()}
        </span>
    </div>
    </div>
  );
};

export default VolatilityStrip2;

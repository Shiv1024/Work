import React, { useState } from 'react';
import { useSpring, animated} from '@react-spring/web'

const VolatilityStrip = ({ value }) => {
  const ranges = [
    { label: 'Poor', min: 0, max: 499, color: '#f87171' }, // red-500
    { label: 'Fair', min: 500, max: 649, color: '#fbbf24' }, // yellow-500
    { label: 'Good', min: 650, max: 749, color: '#3b82f6' }, // blue-500
    { label: 'Excellent', min: 750, max: 900, color: '#10b981' }, // green-500
  ];

  const totalWidth = 100; // Total width of the strip in percentage
  const currentRange = ranges.find(range => value >= range.min && value <= range.max);
  const rangeWidth = totalWidth / ranges.length;
  const stripPercentage = `${(value - (currentRange.min - 1)) / (currentRange.max - currentRange.min) * rangeWidth + (currentRange.label === 'Poor' ? 0 : ranges.slice(0, ranges.indexOf(currentRange)).reduce((acc, range) => acc + rangeWidth, 0))}%`;

  const [showTooltip, setShowTooltip] = useState(false);

  const animationProps = useSpring({
    width: stripPercentage,
    from: { width: '0%' },
    config: { duration: 1500 },
    onRest: () => setShowTooltip(true) // Show tooltip after animation completes
  });

  // Determine gradient based on the range
  const getGradient = () => {
    switch (currentRange.label) {
      case 'Poor':
        return 'bg-gradient-to-r from-red-500 to-red-500';
      case 'Fair':
        return 'bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-500';
      case 'Good':
        return 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500';
      case 'Excellent':
        return 'bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500';
      default:
        return 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'; // Fallback
    }
  };

  const tooltipColor = currentRange.color;

  return (
    <div className="relative w-full h-4 mb-4">
      <div className={`absolute inset-0 ${getGradient()} opacity-20`} />
      <animated.div
        style={animationProps}
        className={`absolute h-full ${getGradient()}`}
      />
      {showTooltip && (
        <div
          className="absolute"
          style={{
            left: `calc(${stripPercentage} - 22px)`,
            top: '-40px',
          }}
        >
          <div className="relative flex items-center justify-center">
            <div
              className="bg-white border rounded shadow-lg px-2 py-1 text-white text-sm"
              style={{ backgroundColor: tooltipColor, borderColor: tooltipColor }}
            >
              {value}
            </div>
            <div
              className="absolute w-0 h-0"
              style={{
                borderTop: `8px solid ${tooltipColor}`,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VolatilityStrip;

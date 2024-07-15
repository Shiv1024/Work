import React from 'react';
import GaugeChart from 'react-gauge-chart';

const VolatilityGauge = (props) => {
  let gaugeValue = 0.5; // Default value for medium
  let gaugeText = 'Medium';

  // Set gauge value and text based on volatility scale (low, medium, high)
  if (props.value === 'Low') {
    gaugeValue = 0.2;
    gaugeText = 'Low';
  } else if (props.value === 'High') {
    gaugeValue = 0.8;
    gaugeText = 'High';
  }

  return (
    <div style={{ width: '200px', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>
        <GaugeChart
          id="volatility-gauge"
          nrOfLevels={3}
          colors={['#ADD8E6', '#4682B4', '#002a40']}
          percent={gaugeValue}
          arcWidth={0.3}
          hideText // Hides percentage text
        />
      </div>
      <div style={{ textAlign: 'center', fontSize: '18px' }}>
        <span style={{ fontWeight: 'bold' }}>Volatility Scale - {gaugeText}</span>
      </div>
    </div>
  );
};

export default VolatilityGauge;

import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Gauge = (props) => {
  let gaugeValue = 0.5; // Default value for medium
  let gaugeText = 'Medium';
  let gaugeColor = '#FFA500'; // Orange color for medium

  // Set gauge value, text, and color based on volatility scale (low, medium, high)
  if (props.value === 'Low') {
    gaugeValue = 0.2;
    gaugeText = 'Low';
    gaugeColor = '#FF6347'; // Red for low
  } else if (props.value === 'High') {
    gaugeValue = 0.8;
    gaugeText = 'High';
    gaugeColor = '#32CD32'; // Green for high
  }

  return (
    <div style={{ width: '200px', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>
        <GaugeChart
          id="volatility-gauge"
          nrOfLevels={3}
          colors={['#FF6347', gaugeColor, '#32CD32']} // Red, Orange (Medium), Green
          percent={gaugeValue}
          arcWidth={0.3}
          hideText // Hides percentage text
        />
      </div>
      <div style={{ textAlign: 'center', fontSize: '18px' }}>
        <span style={{ fontWeight: 'bold' }}>{props.label} - {gaugeText}</span>
      </div>
    </div>
  );
};

export default Gauge;

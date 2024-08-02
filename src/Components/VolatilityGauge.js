import React from 'react';
import GaugeChart from 'react-gauge-chart';

const VolatilityGauge = (props) => {
  let gaugeValue;
  let gaugeText;

  // Set gauge value and text based on volatility scale (poor, average, good, excellent)
  if (props.value <= 499) {
    gaugeValue = (props.value - 300) / 600; // Adjust to a range suitable for 0-1 percentage
    gaugeText = 'Poor';
  } else if (props.value <= 649) {
    gaugeValue = (props.value - 300) / 600;
    gaugeText = 'Average';
  } else if (props.value <= 749) {
    gaugeValue = (props.value - 300) / 600;
    gaugeText = 'Good';
  } else {
    gaugeValue = (props.value - 300) / 600;
    gaugeText = 'Excellent';
  }

  return (
    <div style={{ width: '200px', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px', color:'black' }}>
        <GaugeChart style={{color: 'black'}}
          id="volatility-gauge"
          nrOfLevels={4}
          colors={['#e76261', '#FFBF00', '#35a6e6', '#33c294']}
          arcsLength={[0.333, 0.25, 0.167, 0.25]}
          percent={gaugeValue}
          arcWidth={0.07}
          hideText // Hides percentage text
        />
      </div>
      <div style={{ textAlign: 'center', fontSize: '18px', color:`${gaugeValue<=0.333?('#e76261'):(gaugeValue<=0.58?'#FFBF00':(gaugeValue<=0.75?'#35a6e6':'#33c294'))}`, marginTop: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>{props.value}</span>
      </div>
      <div style={{ textAlign: 'center', fontSize: '18px' }}>
        <span style={{ fontWeight: 'bold' }}>Cibil Score -<span style={{color:`${gaugeValue<=0.333?('#e76261'):(gaugeValue<=0.58?'#FFBF00':(gaugeValue<=0.75?'#35a6e6':'#33c294'))}`}}>{gaugeText}</span> </span>
      </div>
      
    </div>
  );
};

export default VolatilityGauge;

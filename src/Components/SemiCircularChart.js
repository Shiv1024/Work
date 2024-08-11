// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const SemiCircularChart = ({ value }) => {

//   const data = {
//     datasets: [
//       {
//         data: [10, 20, 30],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         borderWidth: 0,
//         cutout: '80%', // This makes the chart semicircular
//       },
//     ],
//   };

//   const options = {
//     rotation: -90,
//     circumference: 180,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'bottom',
//       },
//     },
//   };

//   return (
//     <div style={{ width: '400px',height:'200px', margin: '0 auto' }}>
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default SemiCircularChart;







import React from 'react';
import GaugeChart from 'react-gauge-chart';
import numeral from 'numeral';
const VolatilityGauge = (props) => {
  let gaugeValue;
  let gaugeText;

  // Set gauge value and text based on volatility scale (poor, average, good, excellent)
  // if (props.value <= 499) {
  //   gaugeValue = (props.value - 300) / 600; // Adjust to a range suitable for 0-1 percentage
  //   gaugeText = 'Poor';
  // } else if (props.value <= 649) {
  //   gaugeValue = (props.value - 300) / 600;
  //   gaugeText = 'Average';
  // } else if (props.value <= 749) {
  //   gaugeValue = (props.value - 300) / 600;
  //   gaugeText = 'Good';
  // } else {
  //   gaugeValue = (props.value - 300) / 600;
  //   gaugeText = 'Excellent';
  // }
 
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
const formatCurrency = (value) => {
  if (value === null || value === undefined) return '-';
  return `₹${parseFloat(value).toLocaleString()}`;
};
return (
  <div
    style={{ width: '400px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
  >
    <div style={{ width: '80%', position: 'relative' }}>
      <GaugeChart
        id="volatility-gauge"
        nrOfLevels={4}
        colors={['#e76261', '#FFBF00', '#35a6e6', '#33c294']}
        arcsLength={[0.333, 0.25, 0.167, 0.25]}
        percent={gaugeValue}
        arcWidth={0.07}
        hideText // Hides percentage text
        needleColor={"white"}
        needleBaseColor={"white"}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '30px',
          fontWeight: '700',
          color: `${gaugeValue <= 0.333 ? '#e76261' : (gaugeValue <= 0.58 ? '#FFBF00' : (gaugeValue <= 0.75 ? '#35a6e6' : '#33c294'))}`
        }}
      >
        {formatCurrency(props.value)}
      </div>
    </div>
  </div>
);
};

export default VolatilityGauge;

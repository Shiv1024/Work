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

  return (
    <div
      style={{ width: '400px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ width: '80%', textAlign: 'center'}}>
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
      </div>
      <div className='' style={{ textAlign: 'center', fontSize: '30px', color: `${gaugeValue <= 0.333 ? '#e76261' : (gaugeValue <= 0.58 ? '#FFBF00' : (gaugeValue <= 0.75 ? '#35a6e6' : '#33c294'))}`, marginTop: '-15px' }}>
        <span style={{ fontWeight: 700 }}>{props.value}</span>
      </div>
      <div style={{ textAlign: 'center', fontSize: '18px', marginTop: '-5px'  }}>
        <span style={{ fontWeight: 600 }}>{props.title} <span style={{ color:'black' }}>{gaugeText}</span></span>
      </div>
    </div>
  );
};

export default VolatilityGauge;

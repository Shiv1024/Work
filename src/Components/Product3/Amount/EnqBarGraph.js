import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import numeral from 'numeral';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  const labels = data.map(item => item.category);
  const guarantor = data.map(item => item.guarantor);
  const individual = data.map(item => item.individual);
  const joint = data.map(item => item.joint);
  const total = data.map(item => item.total);

  const formatNumber = (num) => {
    const absNum = Math.abs(num);
    if (absNum >= 100000) {
      return numeral(num / 100000).format('0') + 'L';
    } 
    else if (absNum >= 1000) {
      return numeral(num / 1000).format('0') + 'K';
    } 
    else {
      return numeral(num).format('0,0');
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Guarantor',
        data: guarantor,
        backgroundColor: 'rgba(231, 98, 97, 1)',
      },
      {
        label: 'Individual',
        data: individual,
        backgroundColor: 'rgba(255, 191, 0, 1)',
      },
      {
        label: 'Joint',
        data: joint,
        backgroundColor: 'rgba(53, 166, 230, 1)',
      },
      {
        label: 'Total',
        data: total,
        backgroundColor: 'rgba(51, 194, 148, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return formatNumber(value);
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += formatNumber(context.parsed.y);
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="min-w-full my-6" style={{ height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;

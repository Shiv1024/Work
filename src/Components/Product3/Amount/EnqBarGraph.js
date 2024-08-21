import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  const labels = data.map(item => item.category);
  const guarantor = data.map(item => item.guarantor);
  const individual = data.map(item => item.individual);
  const joint = data.map(item => item.joint);
  const total = data.map(item => item.total);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Guarantor',
        data: guarantor,
        backgroundColor: 'rgba(231, 98, 97, 0.6)',
      },
      {
        label: 'Individual',
        data: individual,
        backgroundColor: 'rgba(255, 191, 0, 0.6)',
      },
      {
        label: 'Joint',
        data: joint,
        backgroundColor: 'rgba(53, 166, 230, 0.6)',
      },
      {
        label: 'Total',
        data: total,
        backgroundColor: 'rgba(51, 194, 148, 0.6)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            // Using Intl.NumberFormat for Indian style formatting
            return new Intl.NumberFormat('en-IN').format(value);
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
            // Format the tooltip value as well
            label += new Intl.NumberFormat('en-IN').format(context.parsed.y);
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

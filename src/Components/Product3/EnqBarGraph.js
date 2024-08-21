import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  const labels = data.map(item => item.category);
  const enquiries3Months = data.map(item => item.enquiries3Months);
  const enquiries6Months = data.map(item => item.enquiries6Months);
  const enquiriesBeyond6Months = data.map(item => item.enquiriesBeyond6Months);
  const totalEnquiries = data.map(item => item.total);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Enquiries in 3 months',
        data: enquiries3Months,
        backgroundColor: 'rgba(231, 98, 97, 0.6)',
      },
      {
        label: 'Enquiries in 6 months',
        data: enquiries6Months,
        backgroundColor: 'rgba(255, 191, 0, 0.6)',
      },
      {
        label: 'Enquiries beyond 6 months',
        data: enquiriesBeyond6Months,
        backgroundColor: 'rgba(53, 166, 230, 0.6)',
      },
      {
        label: 'Total Enquiries',
        data: totalEnquiries,
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
            // Format the value as per Indian numbering style
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

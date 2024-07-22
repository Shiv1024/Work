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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Enquiries in 6 months',
        data: enquiries6Months,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Enquiries beyond 6 months',
        data: enquiriesBeyond6Months,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Total Enquiries',
        data: totalEnquiries,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="my-6">
      <Bar data={chartData} />
    </div>
  );
};

export default BarGraph;

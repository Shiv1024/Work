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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Individual',
        data: individual,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Joint',
        data: joint,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Total',
        data: total,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="min-w-full my-6" style={{ height: '400px' }}>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default BarGraph;

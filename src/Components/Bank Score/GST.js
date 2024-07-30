import React from 'react';
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';

const GST = () => {
  const navigate = useNavigate();
  const dataChart = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 1318,
      title: { text: "GST" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 2000] } }
    }
  ];

  const GSTDescriptions = [
    "Refers to the filing of the GST returns. Score depends on how early and how late has one filled the return.",
    "Refers to the behaviour of the business that is the ratio of sales and purchases of the GST filer.",
    "Refers to the variation of the business on a monthly cycle.",
    "Refers to the volume of invoices generated and the amount linked with the invoices by a particular customer.",
    "Refers to the number of customers that the GST filer is dealing with."
  ];
  

  const factors = [
    { value: 220, title: "Business Efficiency" },
    { value: 500, title: "Customer Spread" },
    { value: 645, title: "Revenue Spread" },
    { value: 645, title: "Stability of Business" },
    { value: 645, title: "Timely Filing" }
  ];

  const layout = { width: 1000, height: 300, margin: { l: 250 } };
  const layoutFactor = { width: 1200, height: 130, margin: { l: 250, t: 20 } };
  const config = { displayModeBar: false };

  return (
    <div className="flex">
      <div className='flex-none'>
        <Sidebar />
      </div>
      <div className='ml-56'>
        <div className="">
          <Plot
            data={dataChart}
            layout={layout}
            config={config}
          />
        </div>

        {factors.map((factor, index) => (
          <div key={index} className="relative -mt-16">
            <Plot
              data={[{
                type: "indicator",
                mode: "number+gauge",
                gauge: { shape: "bullet" },
                value: factor.value,
                domain: { x: [0, 1], y: [0, 1] },
                title: { text: factor.title }
              }]}
              layout={layoutFactor}
              config={config}
            />
            <button title={GSTDescriptions[index]} className='absolute right-24 top-6 transform -translate-y-1 hover:cursor-pointer'>
              <InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className='hover:to-blue-500' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GST;

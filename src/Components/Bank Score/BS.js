import React from 'react';
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const BS = () => {
  const dataChart = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 1318,
      title: { text: "Bank Statement" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 2000] } }
    }
  ];

  const BankStatementDescriptions = [
    "The negatives of a customer’s transaction behavior which includes Cheque Bounces and ATM Cash Handling.",
    "Includes the characteristics of the bank services and loans availed by the customer",
    "Consists of the customer’s regularity in transactions and set amount transactions.",
    "Boxes up a customer’s Balance profile, their internet banking behavior and their bank charges parameters.",
    "Includes a customer’s Credits, Debits and Tax characteristics."
  ];

  const factors = [
    { value: 88, title: "Detrimental Factors" },
    { value: 158, title: "Engagement" },
    { value: 423, title: "Prudence" },
    { value: 390, title: "Frequency" },
    { value: 445, title: "XNS Behaviour" }
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
        <div>
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
              <button title={BankStatementDescriptions[index]} className='absolute right-24 top-6 transform -translate-y-1 hover:cursor-pointer'>
                <InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className='hover:to-blue-500' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BS;

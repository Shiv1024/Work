import React from 'react';
import Plot from 'react-plotly.js';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';

const CIBIL = (props) => {
  const navigate = useNavigate();
  const dataChart = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: (props && props.value) || 1380,
      title: { text: "CIBIL Score" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 2000] } }
    }
  ];

  const factors = [
    { value: 220, title: "Factor1" },
    { value: 500, title: "Factor2" },
    { value: 645, title: "Factor3" },
    { value: 645, title: "Factor4" },
    { value: 645, title: "Factor5" }
  ];

  const layout = { width: 1000, height: 300, margin: { l: 250 } };
  const layoutFactor = { width: 1200, height: 130, margin: { l: 250, t: 20 } };
  const config = { displayModeBar: false };

  return (
    <div className="flex">
      <div className='flex-none'>
        {/* Optional Sidebar */}
      </div>
      <div className=''>
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
            <button title={factor.title} className='absolute right-24 top-6 transform -translate-y-1 hover:cursor-pointer'>
              <InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className='hover:to-blue-500' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CIBIL;

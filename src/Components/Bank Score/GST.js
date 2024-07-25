import React from 'react'
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';
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
  
      const factor1 = [
        {
          type: "indicator",
      mode: "number+gauge",
      gauge: { shape: "bullet" },
      // delta: { reference: 300 },
      value: 220,
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Business Efficiency" }
        }
      ];
  
      const factor2 = [
        {
          type: "indicator",
      mode: "number+gauge",
      gauge: { shape: "bullet" },
      // delta: { reference: 300 },
      value: 500,
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Customer Spread" }
        }
      ];
  
      const factor3 = [
        {
          type: "indicator",
      mode: "number+gauge",
      gauge: { shape: "bullet" },
      // delta: { reference: 300 },
      value: 645,
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Revenue Spread" }
        }
      ];

      const factor4 = [
        {
          type: "indicator",
      mode: "number+gauge",
      gauge: { shape: "bullet" },
      // delta: { reference: 300 },
      value: 645,
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Stability of Business" }
        }
      ];

      const factor5 = [
        {
          type: "indicator",
      mode: "number+gauge",
      gauge: { shape: "bullet" },
      // delta: { reference: 300 },
      value: 645,
      domain: { x: [0, 1], y: [0, 1] },
      title: { text: "Timely Filing" }
        }
      ];
      
      const layout = { width: 1000, height: 300, margin: { l: 250 } };
    const layoutfactor = {width: 1200, height: 130, margin: { l: 250, t:20 } };
      const config = {displayModeBar: false};
  
  
    return (
      <div className="flex">
        <div className='flex-none '>
        <Sidebar/>
        </div> 
        <div className='ml-80'>
  
          <div className="">
            <Plot className=""
            data={dataChart}
            layout={layout}
            config={config}
            />
          </div>
          
          
          <div>
            <div className="-mt-16 py-0 hover:cursor-pointer" >           
            <Plot 
              data={factor1}
              layout={layoutfactor}
              config={config}
              />
            </div>
            
  
            <div className='-mt-16 py-0 hover:cursor-pointer' >
            <Plot 
              data={factor2}
              layout={layoutfactor}
              config={config}
              />
            </div>
  
            <div className="-mt-16 py-0 hover:cursor-pointer" >
            <Plot 
              data={factor3}
              layout={layoutfactor}
              config={config}
              />
            </div>

            <div className="-mt-16 py-0 hover:cursor-pointer" >
            <Plot 
              data={factor4}
              layout={layoutfactor}
              config={config}
              />
            </div>

            <div className="-mt-16 py-0 hover:cursor-pointer" >
            <Plot 
              data={factor5}
              layout={layoutfactor}
              config={config}
              />
            </div>
          </div>
          
        </div>
  
        
  
      </div>
  
    );
}

export default GST
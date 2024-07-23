
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BS from './BS';
import GST from './GST';
import CIBIL from './CIBIL';
import { useRef } from 'react';

const Creditscore = () => {
 
  const navigate = useNavigate();
  const refBs = useRef(null);

  const handleClick = () => {
    refBs.current?.scrollIntoView({behavior: 'smooth'});
      };
  
    const dataChart = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: 1318,
        title: { text: "Overall Score" },
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
    title: { text: "Bank" }
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
    title: { text: "GST" }
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
    title: { text: "CIBIL" }
      }
    ];
    
    const layout = { width: 800, height: 400, margin: { l: 200 } };
    const layoutfactor = { width: 900, height: 130, margin: { l: 250, t:20 }  };
    const config = {displayModeBar: false};


  return (
    <>
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
          <div className="-mt-16 flex" onClick={()=>{handleClick()}}>
          <Plot 
            data={factor1}
            layout={layoutfactor}
            config={config}
            />
          <div className='mt-6 -ml-20 z-10 flex flex-col'>
            <button title='Bank Score' 
            className=' hover:cursor-pointer'><InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className=' hover:to-blue-500'/></button>

            <button title='Bank Score' 
            className=' mt-9 hover:cursor-pointer'><InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className=' hover:to-blue-500'/></button>

            {/* <button title='Bank Score' 
            className=' hover:cursor-pointer'><InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className=' hover:to-blue-500'/></button> */}
            </div>

            
            
            
          </div>
          

          <div className='-mt-16 py-0 -z-20'>
          <Plot 
            data={factor2}
            layout={layoutfactor}
            config={config}
            />
            <button title='Bank Score' 
            className='z-30 -ml-16 hover:cursor-pointer'><InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className=' hover:to-blue-500'/></button>
            {/* <button title='Bank Score' 
            className='-ml-3 z-50 hover:cursor-pointer'><InfoOutlinedIcon sx={{ "&:hover": { color: "skyblue" } }} className=' hover:to-blue-500'/></button> */}
          </div>

          <div className="-mt-16 py-0" >
          <Plot 
            data={factor3}
            layout={layoutfactor}
            config={config}
            />
          </div>
        </div>
        
      </div>

      
    </div>
    <BS ref={refBs}/>
    <GST/>
      
      <CIBIL/>
    </>

  );
}

export default Creditscore;

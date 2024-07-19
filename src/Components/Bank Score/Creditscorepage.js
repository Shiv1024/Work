// import React, { useState} from 'react';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
// import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
// import dataJSON from '../../Assets/executive summary metis.json'
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';

const Creditscore = () => {
  // const [data, setData] = useState(dataJSON);
  // const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const navigate = useNavigate();
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleSort = (key) => {
  //   let direction = 'ascending';
  //   if (sortConfig.key === key && sortConfig.direction === 'ascending') {
  //     direction = 'descending';
  //   }
  //   setSortConfig({ key, direction });
  // };

  // const sortedData = [...data].sort((a, b) => {
  //   if (a[sortConfig.key] < b[sortConfig.key]) {
  //     return sortConfig.direction === 'ascending' ? -1 : 1;
  //   }
  //   if (a[sortConfig.key] > b[sortConfig.key]) {
  //     return sortConfig.direction === 'ascending' ? 1 : -1;
  //   }
  //   return 0;
  // });

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleBorrowerClick = (borrowerData) => {
  //   navigate(`/summary`, { state: { borrowerData } });
  // };

    
    //   const handleTotal = () => {
    //     let sm = 0;
    //     data.forEach((currData) => (sm += currData.LimitUsed));
    //     return sm;
    //   };
    
    //   const handleMax = () => {
    //     let mx = 0;
    //     data.forEach((currData) => (mx = currData.MajorFlags > mx ? currData.MajorFlags : mx));
    //     return mx;
    //   };
  
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
    mode: "number+gauge+delta",
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
    mode: "number+gauge+delta",
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
    mode: "number+gauge+delta",
    gauge: { shape: "bullet" },
    // delta: { reference: 300 },
    value: 645,
    domain: { x: [0, 1], y: [0, 1] },
    title: { text: "CIBIL" }
      }
    ];
    
    const layout = { width: 600, height: 400 };
    const layoutfactor = {width: 800, height: 210};
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
          <div className="my-0 py-0 hover:cursor-pointer" onClick = {()=>{navigate('/BS')}}>
          <Plot 
            data={factor1}
            layout={layoutfactor}
            config={config}
            />
          </div>
          

          <div className='my-0 py-0 hover:cursor-pointer' onClick = {()=>{navigate('/GST')}}>
          <Plot 
            data={factor2}
            layout={layoutfactor}
            config={config}
            />
          </div>

          <div className="my-0 py-0 hover:cursor-pointer" onClick = {()=>{navigate('/CIBIL')}}>
          <Plot 
            data={factor3}
            layout={layoutfactor}
            config={config}
            />
          </div>
        </div>
        
      </div>

      

    </div>

  );
}

export default Creditscore;

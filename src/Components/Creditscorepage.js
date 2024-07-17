import React, { useState} from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import dataJSON from '../Assets/executive summary metis.json'
import Sidebar from './Sidebar2';

const Creditscore = () => {
  const [data, setData] = useState(dataJSON);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleBorrowerClick = (borrowerData) => {
    navigate(`/summary`, { state: { borrowerData } });
  };

    
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
  
  return (
    <div className="overflow-y-hidden flex">
      <div className='flex-none '>
      <Sidebar/>
      </div>     
    </div>

  );
}

export default Creditscore;

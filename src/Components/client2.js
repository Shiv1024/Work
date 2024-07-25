import React, { useState } from 'react';
import { DataGrid ,GridColumnMenu} from '@mui/x-data-grid';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import dataJSON from '../Assets/new executive summary metis.json';
import Sidebar from './Sidebar';
import Tooltip from '@mui/material/Tooltip';
// import { Filter1Outlined } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function CustomColumnMenu(props) {
    return (
      <GridColumnMenu
        {...props}
        slots={{
        // Hide `columnMenuColumnsItem`
        columnMenuColumnsItem: null,
      }}
      />
    );
  }
  
const Clients = () => {
  const [data, setData] = useState(dataJSON.map((item, index) => ({ ...item, id: index }))); // Add id to each row
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

  const columns = [
    { field: 'borrower', headerClassName: 'super-app-theme--header', headerName: 'Borrower', width: 200,sortable: false,filterable:false},
    { field: 'loanSanction', headerClassName: 'super-app-theme--header', headerName: 'Loan Sanction', width: 150,sortable: false },
    { field: 'limitUsed', headerClassName: 'super-app-theme--header', headerName: 'Limit Used', width: 150 ,sortable: false,filterable:false},
    {
      field: 'noOfMajorFlags',
      headerClassName: 'super-app-theme--header',
      headerName: 'No. of Major Flags',
      width: 150,
      filterable:false,
      sortable: true,
      
    },
    { field: 'flagDescription', headerClassName: 'super-app-theme--header', headerName: 'Flag Description', width: 200 ,sortable: false,filterable:false},
    { field: 'invoiceMatchingYN', headerClassName: 'super-app-theme--header', headerName: 'Invoice Matching Y/N', width: 200,sortable: false,filterable:false },
    { field: 'invoiceMatchingAmount', headerClassName: 'super-app-theme--header', headerName: 'Invoice Matching Amount', width: 200,sortable: false,filterable:false },
    { field: 'credableContriToOverallBusiness', headerClassName: 'super-app-theme--header', headerName: 'Contribution To OverallBusiness', width: 200 ,sortable: false,filterable:false},
    {
      field: 'trendDeclineIncreaseConstant',
      headerClassName: 'super-app-theme--header',
      headerName: 'Trend ',
      sortable: false
      ,filterable:false,
      width: 200,
      renderCell: (params) => (
        <div style={{ cursor: 'pointer' }}>
          <Tooltip title={params.row.remarks} placement="bottom">
            <div>{params.value}</div>
          </Tooltip>
        </div>
      )
    },
    { field: 'profiling', headerClassName: 'super-app-theme--header', headerName: 'Profiling', width: 150,sortable: false, },
    { field: 'action', headerClassName: 'super-app-theme--header', headerName: 'Action', width: 150,sortable: false,filterable:false },
  ];

  return (
    <div className="overflow-y-hidden flex">
      <div className='flex-none '>
        <Sidebar />
      </div>

      <div className='flex-1 p-4 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-x-hidden'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={sortedData}
            columns={columns}
            pageSize={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            slots={{ columnMenu: CustomColumnMenu }}
            onPageChange={handleChangePage}
            onPageSizeChange={handleChangeRowsPerPage}
            sx={{
              height: 300,
              width: '100%',
              '& .super-app-theme--header': {
                backgroundColor: '#002a40',
                color: 'white',
              },
              '& .MuiDataGrid-iconSeparator': {
                color: 'white',
              },
              '& .MuiDataGrid-sortIcon': {
                color: 'white',
              },
              '& .MuiDataGrid-menuIconButton': {
                color: 'white',
                
              }
              
            }}
            disableColumnMenu
          
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

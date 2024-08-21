import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dataJSON from '../Assets/new executive summary metis.json';
import Sidebar from './Sidebar';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import numeral from 'numeral';
const loanSanctionOptions = [
  { value: '', label: 'All' },
  { value: '0-200', label: '0-200' },
  { value: '200-500', label: '200-500' },
  { value: '500-1000', label: '500-1000' },
  { value: '>1000', label: '>1000' },
];

const profilingOptions = [
  { value: '', label: 'All' },
  { value: 'Green', label: 'Green' },
  { value: 'Amber', label: 'Amber' },
  { value: 'Red', label: 'Red' },
];

const profilingColors = {
  Green: 'text-green-500',
  Medium: 'text-amber-500',
  High: 'text-red-500',
  Red: 'text-red-500',
  Yellow:'text-yellow-500'
};

const Clients = () => {
  const [data, setData] = useState(dataJSON);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loanSanctionFilter, setLoanSanctionFilter] = useState('');
  const [profilingFilter, setProfilingFilter] = useState('');
  const [loanAnchorEl, setLoanAnchorEl] = useState(null);
  const [profilingAnchorEl, setProfilingAnchorEl] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterLoanSanction = (option) => {
    setLoanSanctionFilter(option.value);
    setLoanAnchorEl(null);
  };

  const handleFilterProfiling = (option) => {
    setProfilingFilter(option.value);
    setProfilingAnchorEl(null);
  };

  const handleClearLoanSanctionFilter = () => {
    setLoanSanctionFilter('');
  };

  const handleClearProfilingFilter = () => {
    setProfilingFilter('');
  };

  const filteredData = data.filter((row) => {
    let loanSanctionMatch = true;
    let profilingMatch = true;

    if (loanSanctionFilter) {
      const loanSanction = parseFloat(row.loanSanction);
      switch (loanSanctionFilter) {
        case '0-200':
          loanSanctionMatch = loanSanction >= 0 && loanSanction <= 200;
          break;
        case '200-500':
          loanSanctionMatch = loanSanction > 200 && loanSanction <= 500;
          break;
        case '500-1000':
          loanSanctionMatch = loanSanction > 500 && loanSanction <= 1000;
          break;
        case '>1000':
          loanSanctionMatch = loanSanction > 1000;
          break;
        default:
          break;
      }
    }

    if (profilingFilter) {
      profilingMatch = row.profiling === profilingFilter;
    }

    return loanSanctionMatch && profilingMatch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const formatCurrency = (value) => {
    if (value === null || value === undefined) return '-';
    return numeral(value / 100000).format('0.0') + 'L';;
  };

  const formatPercentage = (value) => {
    if (value === null || value === undefined) return '-';
    return `${parseFloat(value * 100).toFixed(2)}%`;
  };

  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <div className='flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-x-hidden'>
            <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr text-white flex items-center">
                <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
            </div>
        <div className="flex-1 px-8 py-4 overflow-y-auto">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="bg-bcgClr" >
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium' }}>
                <div className="flex items-center justify-between">
                    <span>Borrower</span>
                    {profilingFilter && (
                      <Tooltip title="Clear Filter" placement="bottom">
                        <IconButton onClick={handleClearProfilingFilter}>
                          <FilterListIcon style={{ color: 'white' }} />
                        </IconButton>
                      </Tooltip>
                    )}
                    <Tooltip title="Filter" placement="bottom">
                      <IconButton onClick={(e) => setProfilingAnchorEl(e.currentTarget)}>
                        <MoreVertIcon style={{ color: 'white' }} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={profilingAnchorEl}
                      open={Boolean(profilingAnchorEl)}
                      onClose={() => setProfilingAnchorEl(null)}
                    >
                      {profilingOptions.map(option => (
                        <MenuItem key={option.value} onClick={() => handleFilterProfiling(option)}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' , fontWeight:'medium'}}>
                  <div className="flex items-center justify-between text-nowrap">
                    <div className='flex flex-col'>
                    <span>Loan Sanction</span>
                    <span>(INR in Lakhs)</span>
                    </div>
                    {loanSanctionFilter && (
                      <Tooltip title="Clear Filter" placement="bottom">
                        <IconButton onClick={handleClearLoanSanctionFilter}>
                          <FilterListIcon style={{ color: 'white' }} />
                        </IconButton>
                      </Tooltip>
                    )}
                    <Tooltip title="Filter" placement="bottom">
                      <IconButton onClick={(e) => setLoanAnchorEl(e.currentTarget)}>
                        <MoreVertIcon style={{ color: 'white' }} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={loanAnchorEl}
                      open={Boolean(loanAnchorEl)}
                      onClose={() => setLoanAnchorEl(null)}
                    >
                      {loanSanctionOptions.map(option => (
                        <MenuItem key={option.value} onClick={() => handleFilterLoanSanction(option)}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium'}}>
                   <div className='flex flex-col text-nowrap'>
                    <span>Limit Used</span>
                    <span>(INR in Lakhs)</span>
                    </div>
                </TableCell>
                <TableCell onClick={() => handleSort('noOfMajorFlags')} style={{ color: 'white', textAlign: 'center', fontWeight:'medium' }}>
                  <div className='flex flex-row items-center cursor-pointer '>
                    <div className='text-wrap mr-2'>No. of Major Flags</div>
                    <Tooltip title="Sort" placement="bottom">
                      {sortConfig.key === 'noOfMajorFlags' && (sortConfig.direction === 'ascending' ? <ArrowDownwardOutlinedIcon /> : <ArrowUpwardOutlinedIcon />)}
                    </Tooltip>
                  </div>
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium' }}>
                  Flag Description
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium'}}>
                  Invoice Matching Y/N
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium' }}>
                  Saliency
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center', fontWeight:'medium' }}>
                  Trend
                </TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' , fontWeight:'medium'}}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <TableCell style={{ textAlign: 'center' }}>
                  <div className={profilingColors[row.profiling]}>{row.borrower}</div>
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{formatCurrency(row.loanSanction)}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{formatCurrency(row.limitUsed)}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.noOfMajorFlags}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.flagDescription}</TableCell>
                  <TableCell style={{ textAlign: 'center',cursor:'pointer' }}>
                    <Tooltip title={`Invoice Matching Amount: ${formatCurrency(row.invoiceMatchingAmount)}`}>
                      <span>{row.invoiceMatchingYN}</span>
                    </Tooltip>
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{formatPercentage(row.credableContriToOverallBusiness)}</TableCell>
                  <TableCell style={{ textAlign: 'center',cursor:'pointer' }}> 
                    {<Tooltip title={row.remarks} placement="bottom">
                          <div className="truncate">
                          {row.trendDeclineIncreaseConstant}
                          </div>
                      </Tooltip>}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }} >
                    {row.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 35]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Clients;

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TablePagination from '@mui/material/TablePagination';
import dataJSON from '../Assets/new executive summary metis.json';
import Sidebar from './Sidebar';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Tooltip from '@mui/material/Tooltip';
import PercentIcon from '@mui/icons-material/Percent';
import FilterListIcon from '@mui/icons-material/FilterList';

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
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
    return `₹${parseFloat(value).toLocaleString()}`;
  };

  const formatPercentage = (value) => {
    if (value === null || value === undefined) return '-';
    return `${parseFloat(value*100).toFixed(2)}%`;
  };

  return (
    <div className="overflow-y-hidden flex">
      <div className='flex-none'>
        <Sidebar />
      </div>

      <div className='p-4 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-x-hidden'>
        <div className="flex overflow-x-scroll overflow-y-hidden">
          <table className="flex-shrink-0 mx-auto bg-white border-collapse overflow-x-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-bcgClr  text-white text-center text-nowrap">Borrower</th>
                <th className="py-2 px-4 bg-bcgClr  text-white text-center text-nowrap">
                  <div className="flex items-center justify-between">
                    <span>Loan Sanction</span>
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
                </th>
                <th className="py-2 px-4 bg-bcgClr  text-white text-center text-nowrap">Limit Used</th>
                <th onClick={() => handleSort('noOfMajorFlags')} className="py-2 px-4 bg-bcgClr text-white text-center cursor-pointer">
                  <div className='flex flex-row items-center'>
                    <div className='text-nowrap mr-2'>No. of Major Flags</div>
                    <Tooltip title="Sort" placement="bottom">
                      {sortConfig.key === 'noOfMajorFlags' && (sortConfig.direction === 'ascending' ? <ArrowDownwardOutlinedIcon /> : <ArrowUpwardOutlinedIcon />)}
                    </Tooltip>
                  </div>
                </th>
                <th className="py-2 px-4 bg-bcgClr text-white w-64 text-center text-nowrap">Flag Description</th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center text-nowrap">Invoice Matching Y/N</th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center text-nowrap">Invoice Matching Amount</th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center text-nowrap">
                  Contribution to Overall Business
                  (<PercentIcon/>)
                </th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center text-nowrap">Trend</th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center text-nowrap">
                  <div className="flex items-center justify-between">
                    <span>Profiling</span>
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
                </th>
                <th className="py-2 px-4 bg-bcgClr text-white text-center">Action</th>
              </tr>
            </thead>
            <tbody className="shadow-lg">
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <tr key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                  <td className="py-1 px-4 text-left">
                    <div className="relative ">
                      <div className="truncate hover:cursor-pointer text-blue-500">{row.borrower}</div>
                      {row.borrower.length > 40 &&
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100  h-10 overflow-auto">
                          {row.borrower}
                        </div>
                      }
                    </div>
                  </td>
                  <td className="py-2 px-7 text-center">
                    <div className="relative ">
                      <div className="truncate text-center">{row.loanSanction}</div>
                    </div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative">{row.limitUsed}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative ">{row.noOfMajorFlags}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="relative ">
                      {row.flagDescription.length >30 ?
                        <Tooltip title={row.flagDescription} placement="bottom">
                        <div className="truncate text-wrap">{row.flagDescription}</div>
                        </Tooltip>:
                        <div className="truncate text-wrap">{row.flagDescription}</div>
                      }
                    </div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative ">{row.invoiceMatchingYN || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative ">{formatCurrency(row.invoiceMatchingAmount)}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative ">{formatPercentage(row.credableContriToOverallBusiness)}</div>
                  </td>
                  <td className="py-1 px-4 text-center relative cursor-pointer">
                    <div className="relative  group">
                      <Tooltip title={row.remarks} placement="bottom">
                        <div className="truncate">
                          {row.trendDeclineIncreaseConstant}
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                  <td className={`py-1 px-4 text-center relative  ${profilingColors[row.profiling]}`}>
                    <div className="truncate">{row.profiling || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-64 text-wrap">{row.action || '-'}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Clients;

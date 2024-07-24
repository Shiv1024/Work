import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import dataJSON from '../Assets/new executive summary metis.json';
import Sidebar from './Sidebar';

const Clients = () => {
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

  return (
    <div className="overflow-y-hidden flex">
      <div className='flex-none '>
        <Sidebar />
      </div>

      <div className='flex-1 p-2 pl-60 lg:pl-56 md:pl-0 flex flex-col overflow-x-hidden'>
        <div className="flex overflow-x-scroll overflow-y-hidden">
          <table className="flex-shrink-0 mx-auto mt-4 bg-white border-collapses overflow-x-auto">
            <thead>
              <tr className="">
                <th
                  className="py-2 px-4 bg-bcgClr w-52 text-white text-center cursor-pointer"
                  onClick={() => handleSort('borrower')}
                >
                  Borrower
                  {sortConfig.key === 'borrower' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  onClick={() => handleSort('loanSanction')}
                  className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
                >
                  Loan Sanction
                  {sortConfig.key === 'loanSanction' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  onClick={() => handleSort('limitUsed')}
                  className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
                >
                  Limit Used
                  {sortConfig.key === 'limitUsed' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  onClick={() => handleSort('noOfMajorFlags')}
                  className="py-2 px-4 bg-bcgClr w-12 text-white text-center cursor-pointer"
                >
                  No. of Major Flags
                  {sortConfig.key === 'noOfMajorFlags' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  onClick={() => handleSort('flagDescription')}
                  className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
                >
                  Flag description
                  {sortConfig.key === 'flagDescription' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
                >
                  Invoice Matching Y/N
                </th>
                <th
                  className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
                >
                  Invoice Matching Amount
                </th>
                <th
                  className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
                >
                  Credable Contri to Overall Business
                </th>
                <th
                  className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
                >
                  Trend Decline/Increase/Constant
                </th>
                <th
                  onClick={() => handleSort('profiling')}
                  className="py-2 px-4 bg-bcgClr w-20 text-white text-center cursor-pointer"
                >
                  Profiling
                  {sortConfig.key === 'profiling' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
                <th
                  onClick={() => handleSort('action')}
                  className="py-2 px-4 bg-bcgClr w-80 text-white text-center cursor-pointer"
                >
                  Action
                  {sortConfig.key === 'action' && (
                    sortConfig.direction === 'ascending' ? (
                      <ArrowDownwardOutlinedIcon />
                    ) : (
                      <ArrowUpwardOutlinedIcon />
                    )
                  )}
                </th>
              </tr>
            </thead>
            <tbody className="shadow-lg">
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <tr key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                  <td className="py-1 px-4 text-left">
                    <div className="relative w-56">
                      <div className="truncate hover:cursor-pointer text-blue-500">{row.borrower}</div>
                      {row.borrower.length > 40 &&
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                          {row.borrower}
                        </div>
                      }
                    </div>
                  </td>
                  <td className="py-2 px-7 text-center">
                    <div className="relative w-9">
                      <div className="truncate text-center">{row.loanSanction}</div>
                    </div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-10">{row.limitUsed}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-12">{row.noOfMajorFlags}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="relative w-64">
                      <div className="truncate">{row.flagDescription}</div>
                      {row.flagDescription.length > 40 &&
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-l opacity-0 hover:opacity-100 w-fit h-10 overflow-hidden">
                          {row.flagDescription}
                        </div>}
                    </div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-15">{row.invoiceMatchingYN || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-15">{row.invoiceMatchingAmount || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-15">{row.credableContriToOverallBusiness || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center relative cursor-pointer">
                    <div className="relative w-15 group">
                      <div className="truncate">
                        {row.trendDeclineIncreaseConstant}
                      </div>
                      <span className="absolute left-1/2 top-0 transform -translate-x-1/2 z-50 mt-0 pl-1 pr-1 w-max opacity-0 group-hover:opacity-100 bg-gray-600 text-white rounded  transition-opacity duration-200">
                        {row.remarks}
                      </span>
                    </div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-15">{row.profiling || '-'}</div>
                  </td>
                  <td className="py-1 px-4 text-center">
                    <div className="truncate relative w-15">{row.action || '-'}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
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

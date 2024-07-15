import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const Table = () => {
    const [data, setData] = useState([
        {
          categoryName: 'Category A',
          tenureStart: '2023-01-01',
          tenureEnd: '2023-06-30',
          totalNo: 10,
          value: 5000,
          durationNo: 3,
          durationValue: 1500,
          balance: 3500,
          remarks: 'No issues',
          alerts: 'None'
        },
        {
          categoryName: 'Category B',
          tenureStart: '2022-01-01',
          tenureEnd: '2022-12-31',
          totalNo: 15,
          value: 7000,
          durationNo: 5,
          durationValue: 2000,
          balance: 5000,
          remarks: 'Pending approval',
          alerts: 'High'
        },
        {
          categoryName: 'Category C',
          tenureStart: '2023-03-01',
          tenureEnd: '2023-09-30',
          totalNo: 8,
          value: 3000,
          durationNo: 2,
          durationValue: 1000,
          balance: 2000,
          remarks: 'Completed',
          alerts: 'Low'
        },
        {
          categoryName: 'Category D',
          tenureStart: '2022-05-01',
          tenureEnd: '2022-10-31',
          totalNo: 12,
          value: 4500,
          durationNo: 4,
          durationValue: 1800,
          balance: 2700,
          remarks: 'In progress',
          alerts: 'Medium'
        },
        {
          categoryName: 'Category E',
          tenureStart: '2021-07-01',
          tenureEnd: '2021-12-31',
          totalNo: 9,
          value: 3000,
          durationNo: 3,
          durationValue: 1200,
          balance: 1800,
          remarks: 'Overdue',
          alerts: 'High'
        },
        {
          categoryName: 'Category F',
          tenureStart: '2023-02-01',
          tenureEnd: '2023-08-31',
          totalNo: 14,
          value: 6000,
          durationNo: 4,
          durationValue: 2400,
          balance: 3600,
          remarks: 'Pending',
          alerts: 'Low'
        },
        {
          categoryName: 'Category G',
          tenureStart: '2022-04-01',
          tenureEnd: '2022-11-30',
          totalNo: 11,
          value: 4000,
          durationNo: 3,
          durationValue: 1500,
          balance: 2500,
          remarks: 'Completed',
          alerts: 'None'
        },
        {
          categoryName: 'Category H',
          tenureStart: '2021-09-01',
          tenureEnd: '2022-03-31',
          totalNo: 13,
          value: 5500,
          durationNo: 5,
          durationValue: 2200,
          balance: 3300,
          remarks: 'Delayed',
          alerts: 'Medium'
        }
      ]);

  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

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

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mx-4 flex overflow-x-scroll">
      <table className="flex-shrink-0 mx-auto mt-6 border-collapse bg-gray-200 border border-gray-400 shadow-lg rounded-lg">
        <thead>
          <tr className="border-b border-gray-400 text-white bg-bcgClr">
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('categoryName')}
            >
              {sortConfig.key === 'categoryName' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('tenureStart')}
            >
              Tenure Start
              {sortConfig.key === 'tenureStart' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('tenureEnd')}
            >
              Tenure End
              {sortConfig.key === 'tenureEnd' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('totalNo')}
            >
              Total No
              {sortConfig.key === 'totalNo' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24text-left cursor-pointer"
              onClick={() => handleSort('value')}
            >
              Value INR Lakhs
              {sortConfig.key === 'value' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('durationNo')}
            >
              Common Duration Nos
              {sortConfig.key === 'durationNo' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('durationValue')}
            >
              Common Duration Value
              {sortConfig.key === 'durationValue' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('balance')}
            >
              Balance
              {sortConfig.key === 'balance' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 border-r border-gray-400 w-24 text-left cursor-pointer"
              onClick={() => handleSort('remarks')}
            >
              Remarks
              {sortConfig.key === 'remarks' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-2 px-4 w-24 text-left cursor-pointer"
              onClick={() => handleSort('alerts')}
            >
              Alert
              {sortConfig.key === 'alerts' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <tr key={index} className='bg-gray-200'>
              <td className="py-1 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.categoryName}
                </div>
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.tenureStart}
                </div>
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.tenureEnd}
                </div>
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-right">
                {row.totalNo}
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-right">
                ₹{row.value}
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-right">
                {row.durationNo}
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-right">
                {row.durationValue}
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-right">
                ₹{row.balance}
              </td>
              <td className="py-1 px-4 border-r border-gray-400 text-left">
                {row.remarks}
              </td>
              <td className="py-1 px-4 text-left">
                {row.alerts}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border border-gray-400">
            <td colSpan={10} className="py-1 px-4 text-left">
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;

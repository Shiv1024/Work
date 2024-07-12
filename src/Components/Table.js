import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const Table = () => {
  const [data, setData] = useState([
    { ctin: '1234567777777777777', partyName: 'ABC Corp', sumInvoiceValue: 5000, countMonth: 3 },
    { ctin: '654321', partyName: 'XYZ Inchsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', sumInvoiceValue: 7000, countMonth: 2 },
    { ctin: '112233', partyName: 'DEF Ltd', sumInvoiceValue: 3000, countMonth: 1 },
    { ctin: '445566', partyName: 'GHI Pvt', sumInvoiceValue: 4500, countMonth: 4 },
    { ctin: '828456', partyName: 'KSG Corp', sumInvoiceValue: 3000, countMonth: 5 },
    { ctin: '682921', partyName: 'SBS Inc', sumInvoiceValue: 6000, countMonth: 3 },
    { ctin: '116233', partyName: 'UCG Ltd', sumInvoiceValue: 4000, countMonth: 3 },
    { ctin: '447286', partyName: 'JHJ Pvt', sumInvoiceValue: 5500, countMonth: 6 },
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

  const handleTotal = () => {
    let sm = 0;
    data.forEach((currData) => (sm += currData.sumInvoiceValue));
    return sm;
  };

  const handleMax = () => {
    let mx = 0;
    data.forEach((currData) => (mx = currData.countMonth > mx ? currData.countMonth : mx));
    return mx;
  };

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
    <div className="overflow-x-auto">
      <table className="mx-auto mt-8 bg-white border-collapse border-4 shadow-lg border-black">
        <thead>
          <tr className="border-b-4 border-black">
            <th
              className="py-2 px-4 w-40 border-r-4 border-black text-left cursor-pointer"
              onClick={() => handleSort('ctin')}
            >
              ctin
              {sortConfig.key === 'ctin' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              onClick={() => handleSort('partyName')}
              className="py-2 px-4 w-104 border-r-4 border-black text-left cursor-pointer"
            >
              partyName
              {sortConfig.key === 'partyName' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              onClick={() => handleSort('sumInvoiceValue')}
              className="py-2 px-4 w-48 border-r-4 border-black text-center cursor-pointer"
            >
              Sum of invoice value
              {sortConfig.key === 'sumInvoiceValue' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              onClick={() => handleSort('countMonth')}
              className="py-2 px-4 w-40 border-r-4 border-black text-center cursor-pointer"
            >
              Count of Month
              {sortConfig.key === 'countMonth' && (
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
            <tr key={index} className='bg-white'>
              <td className="py-1 px-4 border-r-4 border-black text-left">
                <div className="relative w-40">
                  <div className="truncate">{row.ctin}</div>
                  {row.ctin.length > 14 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                    {row.ctin}
                  </div>
                    }
                </div>
              </td>
              <td className="py-1 px-4 border-r-4 border-black text-left">
                <div className="relative w-104">
                  <div className="truncate">{row.partyName}</div>
                  {row.partyName.length > 50 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-180 h-10 overflow-auto">
                    {row.partyName}
                  </div>}
                </div>
              </td>
              <td className="py-1 px-4 border-r-4 border-black text-right">
                <div className="truncate">{row.sumInvoiceValue}</div>
              </td>
              <td className="py-1 px-4 border-r-2 border-red-500 text-right">
                <div className="truncate">{row.countMonth}</div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-4 border-black">
            <td className="py-1 px-4 border-r-4 border-black text-left font-bold">Total</td>
            <td className="py-1 px-4 border-r-4 border-black text-right font-bold"></td>
            <td className="py-1 px-4 border-r-4 border-black text-right font-bold">{handleTotal()}</td>
            <td className="py-1 px-4 border-r-4 border-black text-right font-bold">{handleMax()}</td>
          </tr>
          <tr className="border-t-4 border-black">
            <td colSpan={4} className="py-1 px-4 border-r-4 border-black text-left">
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

import React, { useState, useEffect } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const SecondTable = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  useEffect(() => {
    fetch('http://localhost:5000/invoiceMatching')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const formatNumber = (number) => {
    return number.toLocaleString('en-US');
  };

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
        <table className="flex-shrink-0 mx-auto mt-8 border-collapse bg-gray-200 border border-gray-400 shadow-lg rounded-lg">
          <thead>
            <tr className="border-b border-gray-400 text-white bg-bcgClr">
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('sno')}
              >
                S. No
                {sortConfig.key === 'sno' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('source')}
              >
                Source
                {sortConfig.key === 'source' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-60 text-center cursor-pointer"
                onClick={() => handleSort('partyName')}
              >
                Party Name
                {sortConfig.key === 'partyName' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-32 text-center cursor-pointer"
                onClick={() => handleSort('invoiceDisbursmentdate')}
              >
                Invoice Disbursement date
                {sortConfig.key === 'invoiceDisbursmentdate' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-32 text-center cursor-pointer"
                onClick={() => handleSort('gstDate')}
              >
                GST Date
                {sortConfig.key === 'gstDate' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('value')}
              >
                Value
                {sortConfig.key === 'value' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-32 text-center cursor-pointer"
                onClick={() => handleSort('invoiceNumber')}
              >
                Invoice Number
                {sortConfig.key === 'invoiceNumber' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-32 text-center cursor-pointer"
                onClick={() => handleSort('status')}
              >
                Status
                {sortConfig.key === 'status' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('differnceInInvoiceAmountCredGst')}
              >
                Difference in invoice amount (cred - gst)
                {sortConfig.key === 'differnceInInvoiceAmountCredGst' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-40 text-center cursor-pointer"
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
                className="py-2 px-4 w-24 text-center cursor-pointer"
                onClick={() => handleSort('alert')}
              >
                Alert
                {sortConfig.key === 'alert' && (
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
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <tr key={index}>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {sortConfig.key === 'sno' && sortConfig.direction === 'descending' ? sortedData.length - index-page*rowsPerPage : index+1+page*rowsPerPage}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.source}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-left">
                    {row.partyName}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.invoiceDisbursmentdate}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.gstDate}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    ₹{formatNumber(row.value)}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.invoiceNumber}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.status}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.differnceInInvoiceAmountCredGst}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.remarks}
                  </td>
                  <td className="py-1 px-4 text-center">
                    {row.alert}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr className="border border-gray-400">
              <td colSpan={11} className="py-1 px-4 text-center">
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

export default SecondTable;

import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const SecondTable = () => {
  const [data, setData] = useState([
    {
      serialNumber: 1,
      source: 'Source A',
      invoiceDisbursementDate: '2023-01-15',
      gstDate: '2023-01-20',
      value: 5000,
      invoiceNumber: 'INV001',
      status: 'Paid',
      differenceInInvoiceAmount: 200,
      remarks: 'No issues',
      alerts: 'None',
      partyName: 'ABC Corp'
    },
    {
      serialNumber: 2,
      source: 'Source B',
      invoiceDisbursementDate: '2022-12-05',
      gstDate: '2022-12-10',
      value: 7000,
      invoiceNumber: 'INV002',
      status: 'Pending',
      differenceInInvoiceAmount: -300,
      remarks: 'Pending approval',
      alerts: 'High',
      partyName: 'XYZ Inc'
    },
    {
      serialNumber: 3,
      source: 'Source C',
      invoiceDisbursementDate: '2023-03-20',
      gstDate: '2023-03-25',
      value: 3000,
      invoiceNumber: 'INV003',
      status: 'Paid',
      differenceInInvoiceAmount: 100,
      remarks: 'Completed',
      alerts: 'Low',
      partyName: 'DEF Ltd'
    },
    {
      serialNumber: 4,
      source: 'Source D',
      invoiceDisbursementDate: '2022-05-10',
      gstDate: '2022-05-15',
      value: 4500,
      invoiceNumber: 'INV004',
      status: 'In Progress',
      differenceInInvoiceAmount: 500,
      remarks: 'In progress',
      alerts: 'Medium',
      partyName: 'GHI Pvt'
    },
    {
      serialNumber: 5,
      source: 'Source E',
      invoiceDisbursementDate: '2021-07-25',
      gstDate: '2021-08-01',
      value: 3000,
      invoiceNumber: 'INV005',
      status: 'Paid',
      differenceInInvoiceAmount: -200,
      remarks: 'Overdue',
      alerts: 'High',
      partyName: 'KLM Corporation'
    },
    {
      serialNumber: 6,
      source: 'Source F',
      invoiceDisbursementDate: '2023-02-10',
      gstDate: '2023-02-15',
      value: 6000,
      invoiceNumber: 'INV006',
      status: 'Pending',
      differenceInInvoiceAmount: 400,
      remarks: 'Pending',
      alerts: 'Low',
      partyName: 'PQR Inc'
    },
    {
      serialNumber: 7,
      source: 'Source G',
      invoiceDisbursementDate: '2022-04-15',
      gstDate: '2022-04-20',
      value: 4000,
      invoiceNumber: 'INV007',
      status: 'Paid',
      differenceInInvoiceAmount: 300,
      remarks: 'Completed',
      alerts: 'None',
      partyName: 'STU Ltd'
    },
    {
      serialNumber: 8,
      source: 'Source H',
      invoiceDisbursementDate: '2021-09-20',
      gstDate: '2021-09-25',
      value: 5500,
      invoiceNumber: 'INV008',
      status: 'Delayed',
      differenceInInvoiceAmount: 800,
      remarks: 'Delayed',
      alerts: 'Medium',
      partyName: 'VWX Pvt'
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
    <div className="flex overflow-x-scroll">
        <table className="flex-shrink-0 mx-auto mt-8 border-collapse bg-gray-200 border border-gray-400 shadow-lg rounded-lg">
          <thead>
            <tr className="border-b border-gray-400 text-white bg-bcgClr">
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('serialNumber')}
              >
                S. No
                {sortConfig.key === 'serialNumber' && (
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
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
                onClick={() => handleSort('invoiceDisbursementDate')}
              >
                Invoice Disbursement date
                {sortConfig.key === 'invoiceDisbursementDate' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
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
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
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
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
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
                onClick={() => handleSort('differenceInInvoiceAmount')}
              >
                Difference in invoice amount (cred - gst)
                {sortConfig.key === 'differenceInInvoiceAmount' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
              <th
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
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
                className="py-2 px-4 border-r border-gray-400 w-24 text-center cursor-pointer"
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
              <th
                className="py-2 px-4 w-60 text-center cursor-pointer"
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
            </tr>
          </thead>
          <tbody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <tr key={index}>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.serialNumber}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.source}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.invoiceDisbursementDate}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.gstDate}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.value}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.invoiceNumber}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.status}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.differenceInInvoiceAmount}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.remarks}
                  </td>
                  <td className="py-1 px-4 border-r border-gray-400 text-center">
                    {row.alerts}
                  </td>
                  <td className="py-1 px-4 text-left">
                    {row.partyName}
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

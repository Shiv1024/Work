import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const ThirdTable = () => {
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
    <div className="overflow-x-auto">
      <div className="w-full overflow-hidden">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                //   scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
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
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.serialNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.invoiceDisbursementDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.gstDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.invoiceNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.differenceInInvoiceAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.remarks}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.alerts}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.partyName}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
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
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
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
      </div>
    </div>
  );
};

export default ThirdTable;

import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const Table5 = ({ wholeInfo, flgComp }) => {
  const [data, setData] = useState(wholeInfo);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
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

  const getStatusClass = (status) => {
    return status === 'Active' ? 'text-green-500' : 'text-red-500';
  };

  const getOwnershipClass = (ownership) => {
    switch (ownership) {
      case 'Joint':
        return 'text-blue-500';
      case 'Guarantor':
        return 'text-yellow-500';
      case 'Individual':
        return 'text-teal-500';
      default:
        return 'text-blue-500';
    }
  };

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };
  

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex overflow-x-scroll">
        <table className="flex-shrink-0 bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              {[
                { label: 'Active/Inactive', key: 'status' },
                { label: 'TYPE', key: 'type' },
                { label: 'CATEGORY', key: 'category' },
                !flgComp && { label: 'OWNERSHIP', key: 'ownership' },
                { label: 'START DATE', key: 'startDate' },
                { label: 'END DATE', key: 'endDate' },
                !flgComp && { label: 'CLOSED', key: 'closed' },
                { label: 'SANCTIONED', key: 'sanctioned' },
                { label: 'OUTSTANDING BALANCE', key: 'outstandingBalance' },
                { label: 'OVERDUE', key: 'overdue' },
                { label: 'EMI', key: 'emi' },
                { label: 'ELAPSED TENURE', key: 'elapsedTenure' },
                { label: 'REMAINING TENURE', key: 'remainingTenure' },
                { label: 'TENURE', key: 'tenure' },
                { label: 'Interest Rate', key: 'interestRate' },
                { label: 'High Credit', key: 'highCredit' },
                { label: 'Latest MM/YY', key: 'latestMMYY' },
                { label: 'Average DPD', key: 'averageDPD' },
                { label: 'Max DPD', key: 'maxDPD' },
                flgComp && { label: 'Flag', key: 'flag' },
                flgComp && { label: 'Amount Last Repaid', key: 'amountLastRepaid' },
                flgComp && { label: 'Repayment Frequency', key: 'repaymentFrequency' },
              ].map(
                (column) =>
                  column && (
                    <th
                      key={column.key}
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort(column.key)}
                    >
                      {column.label}
                      {sortConfig.key === column.key && (
                        sortConfig.direction === 'ascending' ? (
                          <ArrowDownwardOutlinedIcon fontSize="small" />
                        ) : (
                          <ArrowUpwardOutlinedIcon fontSize="small" />
                        )
                      )}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <tr key={index}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusClass(row.status)}`}>{row.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.category}</td>
                  {!flgComp && <td className={`px-6 py-4 whitespace-nowrap text-sm ${getOwnershipClass(row.ownership)}`}>{row.ownership}</td>}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(row.startDate)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(row.endDate)}</td>
                  {!flgComp && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.closed === 'N/A' ? row.closed : formatDate(row.closed)}</td>}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.sanctioned.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.outstandingBalance.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.overdue.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.emi.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.elapsedTenure}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.remainingTenure}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tenure}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.interestRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.highCredit.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.latestMMYY}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.averageDPD}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.maxDPD}</td>
                  {flgComp && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.flag}</td>}
                  {flgComp && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.amountLastRepaid.toLocaleString('en-IN')}</td>}
                  {flgComp && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.repaymentFrequency}</td>}
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
  );
};

export default Table5;

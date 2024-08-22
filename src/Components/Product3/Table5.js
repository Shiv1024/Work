import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { TableContainer } from '@mui/material';
import numeral from 'numeral';
const Table5 = ({ wholeInfo, flgComp }) => {
  const [data, setData] = useState(wholeInfo);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
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
  }
  const formatCurrency = (value) => {
    if (value === null || value === undefined) return '-';
    return numeral(value / 100000).format('0.0') + 'L';;
  };
  return (
    <TableContainer component={Paper}>
      <div className="flex overflow-x-scroll">
        <Table className="flex-shrink-0 border-collapse border border-gray-200">
          <TableHead >
            <TableRow className="bg-bcgClr ">
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
                    <TableCell
                      key={column.key}
                      className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium  uppercase cursor-pointer"
                      sortDirection={sortConfig.key === column.key ? sortConfig.direction : false}
                    >
                      <TableSortLabel style={{color:'white'}} className='text-nowrap'
                        active={sortConfig.key === column.key}
                        direction={sortConfig.direction === 'ascending' ? 'asc' : 'desc'}
                        onClick={() => handleSort(column.key)}
                        IconComponent={sortConfig.direction === 'asc' ? ArrowDownwardOutlinedIcon : ArrowUpwardOutlinedIcon}
                      >
                      {column.label}      
                      </TableSortLabel>
                    </TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <TableCell className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusClass(row.status)}`}>{row.status}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.type}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.category}</TableCell>
                  {!flgComp && <TableCell className={`px-6 py-4 whitespace-nowrap text-sm ${getOwnershipClass(row.ownership)}`}>{row.ownership}</TableCell>}
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(row.startDate)}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(row.endDate)}</TableCell>
                  {!flgComp && <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.closed === 'N/A' ? row.closed : formatDate(row.closed)}</TableCell>}
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.sanctioned)}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.outstandingBalance)}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.overdue.toLocaleString('en-IN')}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.emi)}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.elapsedTenure}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.remainingTenure}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tenure}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.interestRate}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.highCredit)}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.latestMMYY}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.averageDPD}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.maxDPD}</TableCell>
                  {flgComp && <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.flag}</TableCell>}
                  {flgComp && <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(row.amountLastRepaid)}</TableCell>}
                  {flgComp && <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.repaymentFrequency}</TableCell>}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="sticky bottom-0 bg-white w-full flex justify-start">
        <div className="w-auto">
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
    </TableContainer>
  );
};

export default Table5;

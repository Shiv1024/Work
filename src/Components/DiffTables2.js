import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function DiffTable(props) {
  const [isDiffTableVisible, setIsDiffTableVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const toggleDiffTableVisibility = () => {
    setIsDiffTableVisible(!isDiffTableVisible);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined) return '-';
    return `₹${parseFloat(value).toLocaleString()}`;
  };

  const headers = props.data.length > 0 ? Object.keys(props.data[0]) : [];

  const sortedData = React.useMemo(() => {
    let sortableData = [...props.data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (aValue === null || aValue === undefined) return 1;
        if (bValue === null || bValue === undefined) return -1;
        
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        return 0;
      });
    }
    return sortableData;
  }, [props.data, sortConfig]);

  const handleSort = (column) => {
    let direction = 'asc';
    if (sortConfig.key === column && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: column, direction });
  };

  
  const formatHeader = (header) => {
    // Map specific headers to their desired format
    const headerMapping = {
      'loanamt': 'Loan Amount',
      'monthyear': 'Month Year',
      'totaldebit': 'Total Debit',
      'totalcredit': 'Total Credit',
      'totalupidebit': 'Total UPI Debit',
      'totalecommerce': 'Total Ecommerce',
      'amount': 'Amount',
      'nav': 'NAV',
      'premium': 'Premium',
      'loan': 'Loan'
    };

    // Return formatted header if it exists in the mapping
    if (headerMapping[header.toLowerCase()]) {
      return headerMapping[header.toLowerCase()];
    }

    // Default formatting for headers not in the mapping
    return header
      .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space before capital letters
      .replace(/\b\w/g, char => char.toUpperCase());  // Capitalize first letter
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
      <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer" onClick={toggleDiffTableVisibility}>
        <span>{props.title}</span>
        <ArrowDropDownIcon className={`transition-transform transform ${isDiffTableVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isDiffTableVisible && (
        <div className="flex flex-col justify-between p-4">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-center" >
                  {headers.map((header, index) => (
                    <TableCell
                      key={index}
                      style={{ color: 'white', textAlign:'center',cursor:'pointer'}}
                      onClick={() => handleSort(header)}
                    >
                      {formatHeader(header)}
                      {sortConfig.key === header ? (
                        sortConfig.direction === 'asc' ? (
                          <ArrowDownwardOutlinedIcon fontSize="small" />
                        ) : (
                          <ArrowUpwardOutlinedIcon fontSize="small" />
                        )
                      ) : null}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow key={index} className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                    {headers.map((header, idx) => (
                      <TableCell key={idx} align="center">
                        {['totalDebit', 'totalCredit', 'totalUpiDebit', 'totalEcommerce', 'amount', 'NAV', 'premium', 'loanamt', 'loan'].includes(header)
                          ? formatCurrency(row[header])
                          : (row[header] || '-')}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="bg-white w-full flex justify-start mt-4">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={props.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiffTable;

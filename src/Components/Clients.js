import React, { useState, useEffect } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Clients = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/summary1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

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

  const handleBorrowerClick = (borrowerData) => {
    navigate(`/summary`, { state: { borrowerData } });
  };

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto mt-8 bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-bcgClr w-104 text-white text-center cursor-pointer" onClick={() => handleSort('borrower')}>
              Borrower
              {sortConfig.key === 'borrower' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th onClick={() => handleSort('loanSanction')} className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer">
              Loan Sanction
              {sortConfig.key === 'loanSanction' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th onClick={() => handleSort('limitUsed')} className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer">
              Limit Used
              {sortConfig.key === 'limitUsed' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th onClick={() => handleSort('noOfMajorFlags')} className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer">
              No. of Major Flags
              {sortConfig.key === 'noOfMajorFlags' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th onClick={() => handleSort('flagDescription')} className="py-2 px-4 bg-bcgClr w-104 text-white text-center cursor-pointer">
              Flag Description
              {sortConfig.key === 'flagDescription' && (
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
            <tr key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-blue-300 hover:shadow-md'}>
              <td className="py-1 px-4 text-left cursor-pointer" onClick={() => handleBorrowerClick(row)}>
                <div className="relative w-104 truncate">{row.borrower}</div>
              </td>
              <td className="py-1 px-4 text-center">
                <div className="relative w-40">{row.loanSanction || '-'}</div>
              </td>
              <td className="py-1 px-4 text-center">
                <div className="relative w-40">{row.limitUsed || '-'}</div>
              </td>
              <td className="py-1 px-4 text-center">
                <div className="relative w-40">{row.noOfMajorFlags}</div>
              </td>
              <td className="py-1 px-4 text-center">
                <div className="relative w-104 truncate">{row.flagDescription}</div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="py-1 px-4 text-left">
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
}

export default Clients;

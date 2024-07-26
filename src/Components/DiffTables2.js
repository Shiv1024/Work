import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TablePagination from '@mui/material/TablePagination';
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

  return (
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
      <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer" onClick={toggleDiffTableVisibility}>
        <span>{props.title}</span>
        <ArrowDropDownIcon className={`transition-transform transform ${isDiffTableVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isDiffTableVisible && (
        <div className="flex flex-col justify-between p-4">
          <div className="w-full">
            <table className="my-auto border-collapse border border-slate-400 w-full">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th 
                      key={index} 
                      className="py-3 px-4 bg-bcgClr text-white capitalize cursor-pointer"
                      onClick={() => handleSort(header)}
                    >
                      {header}
                      {sortConfig.key === header ? (
                        sortConfig.direction === 'asc' ? (
                          <ArrowDownwardOutlinedIcon fontSize="small" />
                        ) : (
                          <ArrowUpwardOutlinedIcon fontSize="small" />
                        )
                      ) : null}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <tr key={index}>
                    {headers.map((header, idx) => (
                      <td key={idx} className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
                        {['totalDebit', 'totalCredit', 'totalUpiDebit', 'totalEcommerce', 'amount', 'NAV', 'premium', 'loanamt', 'loan'].includes(header)
                          ? formatCurrency(row[header])
                          : (row[header] || '-')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white w-full flex justify-start">
            <div className="w-auto">
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
        </div>
      )}
    </div>
  );
}

export default DiffTable;

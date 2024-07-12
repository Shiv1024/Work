import React, {useState} from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { Navigate, useNavigate } from 'react-router';

const Clients = () => {
    const [data, setData] = useState([
        { Borrower: 'Hughes', LoanSanction: ' ', LimitUsed: '', MajorFlags: 2, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Brezalit Electircals', LoanSanction: 200, LimitUsed: 17.81, MajorFlags: 1, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Hughes', LoanSanction:  '', LimitUsed: '', MajorFlags: 2, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Brezalit Electircals', LoanSanction: 200, LimitUsed: 17.81, MajorFlags: 1, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Hughes', LoanSanction: ' ', LimitUsed: '', MajorFlags: 2, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Brezalit Electircals', LoanSanction: 200, LimitUsed: 17.81, MajorFlags: 1, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Hughes', LoanSanction:  '', LimitUsed: '', MajorFlags: 2, flagDesc: 'flag description about client comes here' },
        { Borrower: 'Brezalit Electircals', LoanSanction: 200, LimitUsed: 17.81, MajorFlags: 1, flagDesc: 'flag description about client comes here' },
      ]);
    
      const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
      const navigate=useNavigate();
    
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
    
    //   const handleTotal = () => {
    //     let sm = 0;
    //     data.forEach((currData) => (sm += currData.LimitUsed));
    //     return sm;
    //   };
    
    //   const handleMax = () => {
    //     let mx = 0;
    //     data.forEach((currData) => (mx = currData.MajorFlags > mx ? currData.MajorFlags : mx));
    //     return mx;
    //   };
    
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
      <table className="mx-auto mt-8 bg-white border-collapse">
        <thead>
          <tr className="">
            <th
              className="py-2 px-4 bg-bcgClr w-104 text-white text-center cursor-pointer"
              onClick={() => handleSort('Borrower')}
            >
              Borrower
              {sortConfig.key === 'Borrower' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('LoanSanction')}
              className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer"
            >
              Loan Sanction
              {sortConfig.key === 'LoanSanction' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('LimitUsed')}
              className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer"
            >
              
              Limit Used
              {sortConfig.key === 'LimitUsed' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('MajorFlags')}
              className="py-2 px-4 bg-bcgClr w-40 text-white text-center cursor-pointer"
            >
              No. of Major Flags
              {sortConfig.key === 'MajorFlags' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('Flag Description')}
              className="py-2 px-4 bg-bcgClr w-104 text-white text-center cursor-pointer"
            >
              Flag description
              {sortConfig.key === 'Flag description' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

          </tr>
        </thead>

        <tbody className='shadow-lg'>
          {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <tr key={index} className={(page*rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-blue-300 hover:shadow-md'}>

              <td className="py-1 px-4   text-left">
                <div className="relative w-104">
                  <div className="truncate hover:cursor-pointer" onClick={()=>{navigate(`/charts`)}}>{row.Borrower}</div>
                  {/* {row.Borrower.length > 20 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                    {row.Borrower}
                  </div>
                    } */}
                </div>
              </td>

              <td className="py-1 px-4   text-center">
                <div className="relative w-40">
                  <div className="truncate">{row.LoanSanction}</div>
                  {row.LoanSanction.length > 50 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                    {row.LoanSanction}
                  </div>}
                </div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate">{row.LimitUsed}</div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate">{row.MajorFlags}</div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate w-104">{row.flagDesc}</div>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          {/* <tr className="">
            <td className="py-1 px-4   text-left font-bold">Total</td>
            <td className="py-1 px-4   text-right font-bold"></td>
            <td className="py-1 px-4   text-right font-bold">{handleTotal()}</td>
            <td className="py-1 px-4   text-right font-bold">{handleMax()}</td>
          </tr> */}
          <tr className="">
            <td colSpan={4} className="py-1 px-4   text-left">
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
  )
}

export default Clients
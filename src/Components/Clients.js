import React, { useState} from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import dataJSON from '../Assets/executive summary metis.json'
import Sidebar from './Sidebar';

const Clients = () => {
  const [data, setData] = useState(dataJSON);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const navigate = useNavigate();
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

  const handleBorrowerClick = (borrowerData) => {
    navigate(`/summary`, { state: { borrowerData } });
  };

    
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
  
  return (
    <div className="overflow-y-hidden flex">
      <div className='flex-none '>
      <Sidebar/>
      </div>

      <div className='flex-1 p-2 pl-60 lg:pl-56 md:pl-0  flex flex-col overflow-x-hidden'>
        <div className="flex overflow-x-scroll overflow-y-hidden">
          <table className="flex-shrink-0 mx-auto mt-4 bg-white border-collapses overflow-x-auto">

        <thead>
          <tr className="">
            <th
              className="py-2 px-4 bg-bcgClr w-52 text-white text-center cursor-pointer"
              onClick={() => handleSort('borrower')}
            >
              Borrower
              {sortConfig.key === 'borrower' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('loanSanction')}
              className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
            >
              Loan Sanction
              {sortConfig.key === 'loanSanction' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('limitUsed')}
              className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
            >
              
              Limit Used
              {sortConfig.key === 'limitUsed' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('noOfMajorFlags')}
              className="py-2 px-4 bg-bcgClr w-12 text-white text-center cursor-pointer"
            >
              No. of Major Flags
              {sortConfig.key === 'noOfMajorFlags' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('flagDescription')}
              className="py-2 px-4 bg-bcgClr w-64 text-white text-center cursor-pointer"
            >
              Flag description
              {sortConfig.key === 'flagDescription' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('profiling')}
              className="py-2 px-4 bg-bcgClr w-20 text-white text-center cursor-pointer"
            >
              Profiling
              {sortConfig.key === 'profiling' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('credableEWSFlag')}
              className="py-2 px-4 bg-bcgClr w-20 text-white text-center cursor-pointer"
            >
              Credable EWS Flag
              {sortConfig.key === 'credableEWSFlag' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>

            <th
              onClick={() => handleSort('action')}
              className="py-2 px-4 bg-bcgClr w-80 text-white text-center cursor-pointer"
            >
              Action
              {sortConfig.key === 'action' && (
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
            <tr key={index} className={(page*rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>

              <td className="py-1 px-4   text-left">
                <div className="relative w-56">
                  <div className="truncate hover:cursor-pointer text-blue-500"onClick={() => handleBorrowerClick(row)}>{row.borrower}</div>
                  {row.borrower.length > 40 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                    {row.borrower}
                  </div>
                    }
                </div>
              </td>

              <td className="py-2 px-7   text-center">
                <div className="relative w-9">
                  <div className="truncate text-center">{row.loanSanction }</div>
                </div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate relative w-10">{row.limitUsed}</div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate relative w-12">{row.noOfMajorFlags}</div>
              </td>

              <td className="py-1 px-4   text-center">
                <div className="relative w-64">
                  <div className="truncate">{row.flagDescription }</div>
                  {row.flagDescription.length > 40 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-l opacity-0 hover:opacity-100 w-fit h-10 overflow-hidden">
                    {row.flagDescription}
                  </div>}
                </div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className="truncate relative w-15">{row.profiling  }</div>
              </td>

              <td className="py-1 px-4   text-center ">
                <div className={`truncate relative w-15  font-bold ${row.credableEWSFlag==="Good"?'text-green-600':(row.credableEWSFlag==="Bad"?'text-red-600':'text-amber-600')}`}>{row.credableEWSFlag}</div>
              </td>

              <td className="py-1 px-4   text-center">
                <div className="relative w-64">
                  <div className="truncate">{row.action }</div>
                  {row.action.length > 40 &&
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-l opacity-0 hover:opacity-100 w-fit h-fit overflow-auto">
                    {row.action}
                  </div>}
                </div>
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
            <td colSpan={3} className="py-1 px-4   text-left">
              {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </td>
          </tr>
        </tfoot>
          </table>
        </div>
       
        <div className="sticky bottom-0 w-full flex justify-start" >
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
      </div>
      
      
    </div>

  );
}

export default Clients;

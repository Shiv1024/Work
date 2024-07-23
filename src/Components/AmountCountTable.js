import React, { useState} from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import dataJSON from '../Assets/dummydataAmtCnt.json'
import Sidebar from './Sidebar';

const AmountCountTable = () => {
    const [data, setData] = useState(dataJSON);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
  
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
  
    const handleCategoryClick = (CategoryData) => {
      navigate(`/summary`, { state: { CategoryData } });
    };
  
      
      //   const handleTotal = () => {
      //     let sm = 0;
      //     data.forEach((currData) => (sm += currData.joint));
      //     return sm;
      //   };
      
      //   const handleMax = () => {
      //     let mx = 0;
      //     data.forEach((currData) => (mx = currData.MajorFlags > mx ? currData.MajorFlags : mx));
      //     return mx;
      //   };
    
    return (
      <div className="overflow-y-hidden flex overflow-hidden">
        <div className='flex-none '>
        <Sidebar/>
        </div>
  
        <div className='flex-1 p-2 pl-60 lg:pl-56 md:pl-0  flex flex-col overflow-x-hidden'>
          <div className="flex ">
            <table className="flex-shrink-0 mx-auto mt-4 bg-white border-collapses overflow-x-hidden">
  
          <thead>
            <tr className="">
              <th
                className="py-2 px-4 bg-bcgClr w-52 text-white text-center cursor-pointer"
                // onClick={() => handleSort('Category')}
              >
                Category
                {sortConfig.key === 'Category' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
  
              <th
                // onClick={() => handleSort('individual')}
                className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
              >
                Individual
                {sortConfig.key === 'individual' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
  
              <th
                // onClick={() => handleSort('joint')}
                className="py-2 px-4 bg-bcgClr w-10 text-white text-center cursor-pointer"
              >
                
                Joint
                {sortConfig.key === 'joint' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
  
        
  
              <th
                // onClick={() => handleSort('Guarantor')}
                className="py-2 px-4 bg-bcgClr w-20 text-white text-center cursor-pointer"
              >
                Guarantor
                {sortConfig.key === 'Guarantor' && (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardOutlinedIcon />
                  ) : (
                    <ArrowUpwardOutlinedIcon />
                  )
                )}
              </th>
  
              
  
              <th
                // onClick={() => handleSort('total')}
                className="py-2 px-4 bg-bcgClr w-80 text-white text-center cursor-pointer"
              >
                Total
                {sortConfig.key === 'total' && (
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
                    <div className="truncate">{row.category}</div>
                    {/* {row.Category.length > 40 && */}
                    {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-xl font-bold opacity-0 hover:opacity-100 w-64 h-10 overflow-auto">
                      {row.category}
                    </div> */}
                      {/* } */}
                  </div>
                </td>
  
                <td className="py-2 px-7   text-center">
                  <div className="relative w-9">
                    <div className="truncate text-center">{row.individual }</div>
                  </div>
                </td>
  
                <td className="py-1 px-4   text-center ">
                  <div className="truncate relative w-10">{row.joint}</div>
                </td>
  
               
  
                
  
                <td className="py-1 px-4   text-center ">
                  <div className="truncate relative w-15">{row.guarantor  }</div>
                </td>
  
              
  
                <td className="py-1 px-4   text-center">
                  <div className="relative w-64">
                    <div className="truncate">{row.total }</div>
                    {/* {row.total.length > 40 && */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 text-white text-l opacity-0 hover:opacity-100 w-fit h-fit overflow-auto">
                      {row.total}
                    </div>
                    {/* } */}
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
         
          {/* <div className="sticky bottom-0 w-full flex justify-start" >
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
        
          </div> */}
        </div>
        
        
      </div>
  
    );
  
}

export default AmountCountTable
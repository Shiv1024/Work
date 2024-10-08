import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import TablePagination from '@mui/material/TablePagination';

const Table = () => {
    const [data, setData] = useState([
        {
          categoryName: 'ABC',
          tenureStart: '2023-01-01',
          tenureEnd: '2023-06-30',
          totalNo: 10,
          value: 5000,
          durationNo: 3,
          durationValue: 1500,
          balance: 3500,
          remarks: 'No issues',
          alerts: 'None'
        },
        {
          categoryName: 'DEF',
          tenureStart: '2022-01-01',
          tenureEnd: '2022-12-31',
          totalNo: 15,
          value: 7000,
          durationNo: 5,
          durationValue: 2000,
          balance: 5000,
          remarks: 'Pending approval',
          alerts: 'High'
        },
        {
          categoryName: 'GHI',
          tenureStart: '2023-03-01',
          tenureEnd: '2023-09-30',
          totalNo: 8,
          value: 3000,
          durationNo: 2,
          durationValue: 1000,
          balance: 2000,
          remarks: 'Completed',
          alerts: 'Low'
        },
        {
          categoryName: 'JKL',
          tenureStart: '2022-05-01',
          tenureEnd: '2022-10-31',
          totalNo: 12,
          value: 4500,
          durationNo: 4,
          durationValue: 1800,
          balance: 2700,
          remarks: 'In progress',
          alerts: 'Medium'
        },
        {
          categoryName: 'MNO',
          tenureStart: '2021-07-01',
          tenureEnd: '2021-12-31',
          totalNo: 9,
          value: 3000,
          durationNo: 3,
          durationValue: 1200,
          balance: 1800,
          remarks: 'Overdue',
          alerts: 'High'
        },
        {
          categoryName: 'PQR',
          tenureStart: '2023-02-01',
          tenureEnd: '2023-08-31',
          totalNo: 14,
          value: 6000,
          durationNo: 4,
          durationValue: 2400,
          balance: 3600,
          remarks: 'Pending',
          alerts: 'Low'
        },
        {
          categoryName: 'STU',
          tenureStart: '2022-04-01',
          tenureEnd: '2022-11-30',
          totalNo: 11,
          value: 4000,
          durationNo: 3,
          durationValue: 1500,
          balance: 2500,
          remarks: 'Completed',
          alerts: 'None'
        },
        {
          categoryName: 'VWX',
          tenureStart: '2021-09-01',
          tenureEnd: '2022-03-31',
          totalNo: 13,
          value: 5500,
          durationNo: 5,
          durationValue: 2200,
          balance: 3300,
          remarks: 'Delayed',
          alerts: 'Medium'
        }
      ]);

  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const formatNumber = (number) => {
    return number.toLocaleString('en-US');
  };

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
    <div className="mx-8 flex flex-col">
      <div className="flex overflow-x-scroll">
        <table className="flex-shrink-0 mx-auto mt-6 border-collapse border border-gray-400 shadow-lg rounded-lg">
        <thead>
          <tr className="border-b border-gray-400 text-white bg-bcgClr">
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('categoryName')}
            >
              {sortConfig.key === 'categoryName' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('tenureStart')}
            >
              Tenure Start
              {sortConfig.key === 'tenureStart' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('tenureEnd')}
            >
              Tenure End
              {sortConfig.key === 'tenureEnd' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('totalNo')}
            >
              Total No
              {sortConfig.key === 'totalNo' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('value')}
            >
              Value INR Lakhs
              {sortConfig.key === 'value' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('durationNo')}
            >
              Common Duration Nos
              {sortConfig.key === 'durationNo' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('durationValue')}
            >
              Common Duration Value
              {sortConfig.key === 'durationValue' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
              onClick={() => handleSort('balance')}
            >
              Balance
              {sortConfig.key === 'balance' && (
                sortConfig.direction === 'ascending' ? (
                  <ArrowDownwardOutlinedIcon />
                ) : (
                  <ArrowUpwardOutlinedIcon />
                )
              )}
            </th>
            <th
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base border-r border-gray-400 w-16 md:w-20 lg:w-24 text-center cursor-pointer"
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
              className="py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 text-xs md:text-sm lg:text-base w-16 md:w-20 lg:w-24 text-center cursor-pointer"
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
          </tr>
        </thead>
        <tbody>
          {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <tr key={index} className={(page*rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
              <td className="py-2 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.categoryName}
                </div>
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.tenureStart}
                </div>
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-left">
                <div className="relative w-24">
                  {row.tenureEnd}
                </div>
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-right">
                {row.totalNo}
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-right">
                ₹{formatNumber(row.value)}
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-right">
                {row.durationNo}
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-right">
                {row.durationValue}
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-right">
                ₹{formatNumber(row.balance)}
              </td>
              <td className="py-2 px-4 border-r border-gray-400 text-left">
                {row.remarks}
              </td>
              <td className="py-2 px-4 text-left">
                {row.alerts}
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <tr className="border border-gray-400">
            <td colSpan={10} className="py-1 px-4 text-left">
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
        </tfoot> */}
        </table>
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

    </div>
  );
};

export default Table;































































// import React, { useState } from 'react';
// import {
//   TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel,
//   Paper, TablePagination
// } from '@mui/material';
// import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

// const DataTable = () => {
//   const [data, setData] = useState([
//     {
//       categoryName: 'ABC',
//       tenureStart: '2023-01-01',
//       tenureEnd: '2023-06-30',
//       totalNo: 10,
//       value: 5000,
//       durationNo: 3,
//       durationValue: 1500,
//       balance: 3500,
//       remarks: 'No issues',
//       alerts: 'None'
//     },
//     {
//       categoryName: 'DEF',
//       tenureStart: '2022-01-01',
//       tenureEnd: '2022-12-31',
//       totalNo: 15,
//       value: 7000,
//       durationNo: 5,
//       durationValue: 2000,
//       balance: 5000,
//       remarks: 'Pending approval',
//       alerts: 'High'
//     },
//     {
//       categoryName: 'GHI',
//       tenureStart: '2023-03-01',
//       tenureEnd: '2023-09-30',
//       totalNo: 8,
//       value: 3000,
//       durationNo: 2,
//       durationValue: 1000,
//       balance: 2000,
//       remarks: 'Completed',
//       alerts: 'Low'
//     },
//     {
//       categoryName: 'JKL',
//       tenureStart: '2022-05-01',
//       tenureEnd: '2022-10-31',
//       totalNo: 12,
//       value: 4500,
//       durationNo: 4,
//       durationValue: 1800,
//       balance: 2700,
//       remarks: 'In progress',
//       alerts: 'Medium'
//     },
//     {
//       categoryName: 'MNO',
//       tenureStart: '2021-07-01',
//       tenureEnd: '2021-12-31',
//       totalNo: 9,
//       value: 3000,
//       durationNo: 3,
//       durationValue: 1200,
//       balance: 1800,
//       remarks: 'Overdue',
//       alerts: 'High'
//     },
//     {
//       categoryName: 'PQR',
//       tenureStart: '2023-02-01',
//       tenureEnd: '2023-08-31',
//       totalNo: 14,
//       value: 6000,
//       durationNo: 4,
//       durationValue: 2400,
//       balance: 3600,
//       remarks: 'Pending',
//       alerts: 'Low'
//     },
//     {
//       categoryName: 'STU',
//       tenureStart: '2022-04-01',
//       tenureEnd: '2022-11-30',
//       totalNo: 11,
//       value: 4000,
//       durationNo: 3,
//       durationValue: 1500,
//       balance: 2500,
//       remarks: 'Completed',
//       alerts: 'None'
//     },
//     {
//       categoryName: 'VWX',
//       tenureStart: '2021-09-01',
//       tenureEnd: '2022-03-31',
//       totalNo: 13,
//       value: 5500,
//       durationNo: 5,
//       durationValue: 2200,
//       balance: 3300,
//       remarks: 'Delayed',
//       alerts: 'Medium'
//     }
//   ]);

//   const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const formatNumber = (number) => number.toLocaleString('en-US');

//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = [...data].sort((a, b) => {
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === 'asc' ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === 'asc' ? 1 : -1;
//     }
//     return 0;
//   });

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="mx-8 flex flex-col">
//       <TableContainer component={Paper} className="overflow-x-scroll">
//         <Table>
//           <TableHead className="bg-bcgClr text-white">
//             <TableRow className='text-white' >
//               {['', 'Tenure Start', 'Tenure End', 'Total No', 'Value INR Lakhs', 'Common Duration Nos', 'Common Duration Value', 'Balance', 'Remarks', 'Alert'].map((head, index) => (
//                 <TableCell style={{color:'white'}}
//                   key={index}
//                   className="py-2 px-4 text-xs md:text-sm lg:text-base text-center cursor-pointer"
//                   sortDirection={sortConfig.key === head.toLowerCase().replace(' ', '') ? sortConfig.direction : false}
//                 >
//                   <TableSortLabel style={{color:'white'}}
//                     active={sortConfig.key === head.toLowerCase().replace(' ', '')}
//                     direction={sortConfig.direction}
//                     onClick={() => handleSort(head.toLowerCase().replace(' ', ''))}
//                     IconComponent={sortConfig.key === head.toLowerCase().replace(' ', '') ? (sortConfig.direction === 'asc' ? ArrowUpwardOutlinedIcon : ArrowDownwardOutlinedIcon) : null}
//                   >
//                     {head}
//                   </TableSortLabel>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//               <TableRow key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
//                 <TableCell className="py-2 px-4 text-left">{row.categoryName}</TableCell>
//                 <TableCell className="py-2 px-4 text-left">{row.tenureStart}</TableCell>
//                 <TableCell className="py-2 px-4 text-left">{row.tenureEnd}</TableCell>
//                 <TableCell className="py-2 px-4 text-right">{row.totalNo}</TableCell>
//                 <TableCell className="py-2 px-4 text-right">₹{formatNumber(row.value)}</TableCell>
//                 <TableCell className="py-2 px-4 text-right">{row.durationNo}</TableCell>
//                 <TableCell className="py-2 px-4 text-right">{row.durationValue}</TableCell>
//                 <TableCell className="py-2 px-4 text-right">₹{formatNumber(row.balance)}</TableCell>
//                 <TableCell className="py-2 px-4 text-left">{row.remarks}</TableCell>
//                 <TableCell className="py-2 px-4 text-left">{row.alerts}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div className="sticky bottom-0 bg-white w-full flex justify-start">
//         <div className="w-auto">
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={sortedData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataTable;


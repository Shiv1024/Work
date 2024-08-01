import React, { useState } from 'react';
import {
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel,
  Paper, TablePagination
} from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const DataTable = () => {
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const formatNumber = (number) => number.toLocaleString('en-US');

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

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mx-8 flex flex-col pt-3">
      <TableContainer component={Paper} className="overflow-x-scroll">
        <Table>
          <TableHead className="">
            <TableRow  style={{color:'white'}}>
                
              {[
                { id: 'categoryName', label: '' },
                { id: 'tenureStart', label: 'Tenure Start' },
                { id: 'tenureEnd', label: 'Tenure End' },
                { id: 'totalNo', label: 'Total No' },
                { id: 'value', label: 'Value INR Lakhs' },
                { id: 'durationNo', label: 'Common Duration Nos' },
                { id: 'durationValue', label: 'Common Duration Value' },
                { id: 'balance', label: 'Balance' },
                { id: 'remarks', label: 'Remarks' },
                { id: 'alerts', label: 'Alert' }
              ].map((headCell) => (
                <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'bold', fontSize:'1vw', borderColor:'black'}}
                  key={headCell.id}
                //   className="py-2 px-4 text-xs md:text-sm lg:text-base text-center cursor-pointer text-white"
                  sortDirection={sortConfig.key === headCell.id ? sortConfig.direction : false}
                >
                  <TableSortLabel style={{color:"white", borderBottomWidth:'1px', fontSize:'1.1vw', borderColor:'black'}}
                    active={sortConfig.key === headCell.id}
                    direction={sortConfig.direction}
                    onClick={() => handleSort(headCell.id)}
                    
                    // IconComponent={sortConfig.key === headCell.id ? (ArrowUpwardOutlinedIcon) : null}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                <TableCell className="py-2 px-4 text-left">{row.categoryName}</TableCell>
                <TableCell className="py-2 px-4 text-left">{row.tenureStart}</TableCell>
                <TableCell className="py-2 px-4 text-left">{row.tenureEnd}</TableCell>
                <TableCell className="py-2 px-4 text-right">{row.totalNo}</TableCell>
                <TableCell className="py-2 px-4 text-right">₹{formatNumber(row.value)}</TableCell>
                <TableCell className="py-2 px-4 text-right">{row.durationNo}</TableCell>
                <TableCell className="py-2 px-4 text-right">{row.durationValue}</TableCell>
                <TableCell className="py-2 px-4 text-right">₹{formatNumber(row.balance)}</TableCell>
                <TableCell className="py-2 px-4 text-left">{row.remarks}</TableCell>
                <TableCell className="py-2 px-4 text-left">{row.alerts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default DataTable;

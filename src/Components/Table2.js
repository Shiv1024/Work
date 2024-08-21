import React, { useState } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import {
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel,
  Paper, TablePagination
} from '@mui/material';
import datajson from "../Assets/matching.json";

const SecondTable = () => {
  const [data, setData] = useState(datajson);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const formatNumber = (number) => {
    return number.toLocaleString('en-US');
  };

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

  return (
    <div className="flex flex-col px-8 py-4">
      <TableContainer component={Paper} className="overflow-x-scroll">
        <Table>
          <TableHead>
            <TableRow style={{color:'white'}}>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'sno' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'sno'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('sno')}
                >
                  S.No
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'source' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'source'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('source')}
                >
                  Source
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'partyName' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'partyName'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('partyName')}
                >
                  Party Name
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'invoiceDisbursmentdate' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'invoiceDisbursmentdate'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('invoiceDisbursmentdate')}
                >
                  Invoice Disbursement Date
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'gstDate' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'gstDate'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('gstDate')}
                >
                  GST Date
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'value' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'value'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('value')}
                >
                  Value
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'invoiceNumber' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'invoiceNumber'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('invoiceNumber')}
                >
                  Invoice Number
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'status' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'status'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('status')}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'differnceInInvoiceAmountCredGst' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'differnceInInvoiceAmountCredGst'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('differnceInInvoiceAmountCredGst')}
                >
                  Difference in Invoice Amount (Cred - GST)
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'remarks' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'remarks'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('remarks')}
                >
                  Remarks
                </TableSortLabel>
              </TableCell>
              <TableCell className='border-b border-gray-400 text-white bg-bcgClr' style={{color:"white", borderBottomWidth:'1px', fontWeight:'medium', borderColor:'black'}} sortDirection={sortConfig.key === 'alert' ? sortConfig.direction : false}>
                <TableSortLabel style={{color:"white", borderBottomWidth:'1px',fontWeight:'medium', borderColor:'black'}}
                  active={sortConfig.key === 'alert'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('alert')}
                >
                  Alert
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index} className={(page * rowsPerPage + index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-gray-100 hover:shadow-md'}>
                  <TableCell className="py-2 px-4 text-left">
                    {sortConfig.key === 'sno' && sortConfig.direction === 'desc' 
                      ? sortedData.length - index - page * rowsPerPage 
                      : index + 1 + page * rowsPerPage}
                  </TableCell>
                  <TableCell className="py-2 px-4 text-left">ABC</TableCell>
                  <TableCell className="py-2 px-4 text-left">
                    {row.partyName === "Not in GST" ? row.partyName : "Party XYZ"}
                  </TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.invoiceDisbursmentdate}</TableCell>
                  <TableCell className="py-2 px-4 text-left">
                    {row.gstDate === 'NaT' ? null : row.gstDate}
                  </TableCell>
                  <TableCell className="py-2 px-4 text-left">₹{formatNumber(row.value)}</TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.invoiceNumber}</TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.status}</TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.differnceInInvoiceAmountCredGst}</TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.remarks}</TableCell>
                  <TableCell className="py-2 px-4 text-left">{row.alert}</TableCell>
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

export default SecondTable;

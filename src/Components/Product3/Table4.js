import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import data from '../../Assets/dummydataAmtCnt.json'

function createData(category, enquiries3Months, enquiries6Months, enquiriesBeyond6Months, total) {
  return { category, enquiries3Months, enquiries6Months, enquiriesBeyond6Months, total };
}

const formatAmount = (amount) => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
      }).format(amount);
    };

const Table4 = ({ data,type }) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead  >
        <TableRow  style={{fontWeight:'bold', backgroundColor:'#f9fafb'}}>
          <TableCell>Category</TableCell>
          <TableCell align="right">Enquiries in 3 Months</TableCell>
          <TableCell align="right">Enquiries in 6 Months</TableCell>
          <TableCell align="right">Enquiries beyond 6 Months</TableCell>
          <TableCell align="right">Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.category}
            </TableCell>
            <TableCell align="right">{type==='count'?row.enquiries3Months:formatAmount(row.enquiries3Months)}</TableCell>
            <TableCell align="right">{type==='count'?row.enquiries6Months:formatAmount(row.enquiries6Months)}</TableCell>
            <TableCell align="right">{type==='count'?row.enquiriesBeyond6Months:formatAmount(row.enquiriesBeyond6Months)}</TableCell>
            <TableCell align="right">{type==='count'?row.total:formatAmount(row.total)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Table4
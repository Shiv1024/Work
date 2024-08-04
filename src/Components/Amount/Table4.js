// import React from 'react';

// const Table = ({ data,type }) => {

//   const formatAmount = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(amount);
//   };
//   return (
//     <table className="min-w-full bg-white border-collapse border border-gray-200">
//       <thead>
//         <tr>
//           <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//           <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guarantor</th>
//           <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Individual</th>
//           <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joint</th>
//           <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.category}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type==='count'?row.guarantor:formatAmount(row.guarantor)}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type==='count'?row.individual:formatAmount(row.individual)}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type==='count'?row.joint:formatAmount(row.joint)}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type==='count'?row.total:formatAmount(row.total)}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;




import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../Amount/dummydataAmtCnt.json'

function createData(category, guarantor, individual,joint, total) {
  return { category, guarantor, individual,joint, total };
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
          <TableCell align="right">Guarantor</TableCell>
          <TableCell align="right">Individual</TableCell>
          <TableCell align="right">Joint</TableCell>
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
            <TableCell align="right">{type==='count'?row.guarantor:formatAmount(row.guarantor)}</TableCell>
            <TableCell align="right">{type==='count'?row.individual:formatAmount(row.individual)}</TableCell>
            <TableCell align="right">{type==='count'?row.joint:formatAmount(row.joint)}</TableCell>
            <TableCell align="right">{type==='count'?row.total:formatAmount(row.total)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Table4
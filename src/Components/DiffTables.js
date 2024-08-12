// import React, {useState} from "react";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import TablePagination from '@mui/material/TablePagination';

// function DiffTable (props)
// {
//     const [isDiffTableVisible, setIsDiffTableVisible] = useState(false);

//   const toggleDiffTableVisibility = () => {
//     setIsDiffTableVisible(!isDiffTableVisible);
//   };

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
//     <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer " onClick={toggleDiffTableVisibility}>
//       <span>{props.Name}</span>
//       <ArrowDropDownIcon className={`transition-transform transform ${isDiffTableVisible ? 'rotate-180' : 'rotate-0'}`} />
//     </div>
//     {isDiffTableVisible && (
//       <div className="flex flex-col justify-between p-4">
//         <div className="w-full">
//           <table className="my-auto border-collapse border border-slate-400 w-full">
//             <thead>
//               <tr>
//                 <th className="py-3 px-4 bg-bcgClr text-white">Inclusions</th>
//                 <th className="py-3 px-4 bg-bcgClr text-white">Measure</th>
//                 <th className="py-3 px-4 bg-bcgClr text-white">Historical trend</th>
//                 <th className="py-3 px-4 bg-bcgClr text-white">Current Month Response</th>
//                 <th className="py-3 px-4 bg-bcgClr text-white">Remarks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {props.Data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//                 <tr key={index}>
//                   <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
//                     {row.inclusions}
//                   </td>
//                   <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
//                     {row.measure}
//                   </td>
//                   <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
//                     {row.historicalTrend}
//                   </td>
//                   <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
//                     {row.currentMonthResponse}
//                   </td>
//                   <td className="py-3 px-4 bg-bgClr3 border-b border-gray-200 text-center">
//                     {row.remarks}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="bg-white w-full flex justify-start">
//           <div className="w-auto">
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25]}
//               component="div"
//               count={props.Data.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
//   );
// }

// export default DiffTable;







import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DiffTable(props) {
  const [isDiffTableVisible, setIsDiffTableVisible] = useState(false);

  const toggleDiffTableVisibility = () => {
    setIsDiffTableVisible(!isDiffTableVisible);
  };

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
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
      <div
        className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer"
        onClick={toggleDiffTableVisibility}
      >
        <span>{props.Name}</span>
        <ArrowDropDownIcon
          className={`transition-transform transform ${
            isDiffTableVisible ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {isDiffTableVisible && (
        <div className="flex flex-col justify-between p-4">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-left">
                  <TableCell  style={{ color: 'white',fontWeight:'medium', fontSize:'1vw', textAlign:'left' }}>
                    Inclusions
                  </TableCell>
                  <TableCell style={{ color: 'white',fontWeight:'medium', fontSize:'1vw', textAlign:'left' }}>
                    Measure
                  </TableCell>
                  <TableCell style={{ color: 'white',fontWeight:'medium', fontSize:'1vw', textAlign:'left' }}>
                    Historical trend
                  </TableCell>
                  <TableCell style={{ color: 'white',fontWeight:'medium', fontSize:'1vw', textAlign:'left' }}>
                    Current Month Response
                  </TableCell>
                  <TableCell style={{ color: 'white',fontWeight:'medium', fontSize:'1vw', textAlign:'left' }}>
                    Remarks
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.Data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow key={index} className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                    <TableCell  align="left">
                      {row.inclusions}
                    </TableCell>
                    <TableCell  align="left">
                      {row.measure}
                    </TableCell>
                    <TableCell  align="left">
                      {row.historicalTrend}
                    </TableCell>
                    <TableCell  align="left">
                      {row.currentMonthResponse}
                    </TableCell>
                    <TableCell align="left">
                      {row.remarks}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="bg-white w-full flex justify-start">
            <div className="w-auto">
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.Data.length}
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

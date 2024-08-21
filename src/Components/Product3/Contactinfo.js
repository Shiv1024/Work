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

const Contactinfo = () => {
  const [isDiffTableVisible, setIsDiffTableVisible] = useState(true);

  const toggleDiffTableVisibility = () => {
    setIsDiffTableVisible(!isDiffTableVisible);
  };

  const mobileNumbers = ["8980022750", "919664652047", "919664652047","9684745778"];
  const emailIds = ["jayjhaveri8161@gmail.com", "jayjhaveri8161@gmail.com", "saffronyarns@gmail.com", "saffronyarns@gmail.com"];
  const addresse = [
    { address: "PLOT NO 12 MOHANDWAR SOCIETY BHARTHANA SURAT GUJARAT 395007", reportedOn: "31-01-2024" },
    { address: "E3ROAD NO 8 SALABD PURA RUPAM CINEMA SURAT, GUJARAT SURAT GUJARAT 395003", reportedOn: "31-12-2023" },
    { address: "3-2885, SALABAT PURA, NEAR RUP AM CINEMA SURAT CITY SURAT GUJARAT 395003", reportedOn: "31-12-2023" },
    { address: "PLOT NO. 12, BHARTHANA MOHANDWAR SOCIETY , GUJARAT 395007", reportedOn: "31-12-2023" }
  ];

  return (
    // <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
    //   <div className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer" onClick={toggleDiffTableVisibility}>
    //     <span className="">Contact Information</span>
    //     <ArrowDropDownIcon className={`transition-transform transform ${isDiffTableVisible ? 'rotate-180' : 'rotate-0'}`} />
    //   </div>
    //   {isDiffTableVisible && (
    //     <div className="flex flex-col lg:flex-row ">
    //       <div className="w-full lg:w-1/2  lg:mb-0 p-4 lg:pl-4 lg:pr-2 py-4">
    //         <table className="w-full border-collapse border border-slate-400">
    //           <thead>
    //             <tr>
    //               <th className="py-3 px-4 bg-bcgClr text-white">Mobile Numbers</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {mobileNumbers.map((number, index) => (
    //               <tr key={index}>
    //                 <td className="py-2 px-4 border-t border-slate-400 text-center">{number}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="w-full lg:w-1/2 lg:pl-2 p-4 lg:pr-4 py-4 lg:mb-0">
    //         <table className="w-full border-collapse border border-slate-400">
    //           <thead>
    //             <tr>
    //               <th className="py-3 px-4 bg-bcgClr text-white">Email IDs</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {emailIds.map((email, index) => (
    //               <tr key={index}>
    //                 <td className="py-2 px-4 border-t border-slate-400 text-center">{email}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   )}
      // {isDiffTableVisible && (
      //   <div className="p-4">
      //     <table className="w-full border-collapse border border-slate-400">
      //       <thead>
      //         <tr>
      //           <th className="py-3 px-4 bg-bcgClr text-white">Address</th>
      //           <th className="py-3 px-4 bg-bcgClr text-white">Reported On</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {addresse.map((entry, index) => (
      //           <tr key={index}>
      //             <td className="py-2 px-4 border-t border-slate-400 text-center">{entry.address}</td>
      //             <td className="py-2 px-4 border-t border-slate-400 text-center">{entry.reportedOn}</td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
      // )}
    // </div>
    <div className="border border-gray-300 rounded-md shadow-sm w-full flex flex-col mb-4">
    <div
      className="bg-bgClr2 p-4 flex justify-between items-center rounded-t-md cursor-pointer"
      // onClick={toggleDiffTableVisibility}
    >
      <span>Contact Information</span>
      {/* <ArrowDropDownIcon
        className={`transition-transform transform ${
          isDiffTableVisible ? 'rotate-180' : 'rotate-0'
        }`} */}
      
    </div>
    {isDiffTableVisible && (
      <div className="flex flex-row space-x-2">
        <div className="w-full lg:w-1/5 p-2"> 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-center">
                  <TableCell
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      
                    }}
                  >
                    Mobile Numbers
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mobileNumbers.map((number, index) => (
                  <TableRow
                    key={index}
                    className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-gray-100 hover:shadow-md'}
                  >
                    <TableCell
                      align="center"
                      className="p-1" 
                    >
                      {number}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="w-full lg:w-1/5 p-2"> 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-center">
                  <TableCell style={{ color: 'white', textAlign: 'center'}}>
                    Email Ids
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emailIds.map((email, index) => (
                  <TableRow
                    key={index}
                    className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-gray-100 hover:shadow-md'}
                  >
                    <TableCell
                      align="center"
                      className="p-1"
                    >
                      {email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="w-full lg:w-3/5 p-2"> 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-center">
                  <TableCell style={{ color: 'white', textAlign: 'center', }}>
                    Address
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign: 'center', }}>
                    Reported On
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {addresse.map((info, index) => (
                  <TableRow
                    key={index}
                    className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-gray-100 hover:shadow-md'}
                  >
                    <TableCell
                      align="center"
                      className="p-1"
                      style={{   }}
                    >
                      {info.address}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="p-1"
                    >
                      {info.reportedOn}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )}
  </div>
  
  
  );
};

export default Contactinfo;

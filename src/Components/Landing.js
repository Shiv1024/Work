import React, { useState, useRef, useEffect } from "react";
import Fileupload from "./Fileupload3.js";
import FileIcon from "./FileIcon.js";
import MainSidebar from "./Mainsidebar.js";
import Navbar from "./Navbar.js";
import Modal from "./modals.js";
import { useNavigate } from "react-router";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import gif from "../Assets/progressIndicator.gif";
const Landing = ({
  isFileUploadVisible,
  closeFileUpload,
  setIsFileUploadVisible,
  fileUploadRef,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [files, setFiles] = useState([]);
  const [asc, setAsc] = useState(true);
  const [isGifVisible, setIsGifVisible] = useState(false);
  const modalRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Function to close modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsFileUploadVisible(false);
      }
    };

    // Add event listener when modal is visible
    if (isFileUploadVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFileUploadVisible, setIsFileUploadVisible]);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };
  const handleFileClose=()=>{
    closeFileUpload();
  }
  const toggleFileUpload = () => {
    setIsFileUploadVisible(!isFileUploadVisible);
  };

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]);
    closeFileUpload();
  };

  const sortByClient = () => {
    setFiles([...files].sort((a, b) => (asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))));
    setAsc(!asc);
  };

  const sortByBank = () => {
    setFiles([...files].sort((a, b) => (asc ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date))));
    setAsc(!asc);
  };

  const handleDocTypeClick = (docType) => {
    switch (docType) {
      case "EWS":
        navigate("/clients");
        break;
      case "Credit Scoring":
        navigate("/creditscorepage");
        break;
      case "Bureau Parsing":
        navigate("/info");
        break;
      case "SMS Parsing":
        navigate("/sms");
        break;
      default:
        break;
    }
  };
  {console.log(files)}
  return (
    <div className="flex-row min-h-screen">
      <MainSidebar />
      <div className="flex flex-col min-h-screen flex-1 w-full">
        <Navbar />
        <div className="mt-4 ml-36 md:ml-52 lg:ml-60 p-4 h-full relative flex-1">
          <div className="-my-2 overflow-x-auto">
            {/* <table className="w-full bg-gray-200 border border-gray-400 shadow-lg rounded-lg">
              <thead>
                <tr className="bg-bcgClr text-white">
                  <th className="py-3 px-4 w-1/5 border-b border-gray-200 text-left cursor-pointer" onClick={sortByClient}>
                    Client Name
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left">
                    Status
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left">
                    Parsed By
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left">
                    Document Type
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left">
                    Uploaded Date
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 text-left">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-3 px-2 border-b border-gray-200 text-left">{file.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200 text-left text-green-600">SUCCESS</td>
                    <td className="py-3 px-4 border-b border-gray-200 text-left">Random Person</td>
                    <td
                      className="py-3 px-4 border-b border-gray-200 text-left cursor-pointer text-blue-500"
                      onClick={() => handleDocTypeClick(file.docType)}
                    >
                      {file.docType}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-left">{file.dateAdded}</td>
                    <td className="py-3 px-4 border-b border-gray-200 text-left"><FileIcon /></td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-bcgClr text-left">
                  <TableCell  style={{ color: 'white', textAlign:'left' }}>
                    Client  Name
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign:'left' }}>
                    Status
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign:'left' }}>
                    Parsed By
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign:'left' }}>
                    Document Type
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign:'left' }}>
                    Uploaded Date
                  </TableCell>
                  <TableCell style={{ color: 'white', textAlign:'left' }}>
                    Download
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files.map((file, index) => (
                  <TableRow key={index} className={(index) % 2 === 0 ? 'bg-white hover:shadow-md' : 'bg-bgClr2 hover:shadow-md'}>
                    <TableCell  align="left">
                      {file.name}
                    </TableCell>
                    <TableCell  align="left"  style={{ color: 'green' }}>
                      SUCCESS
                    </TableCell>
                    <TableCell  align="left">
                      Random Person
                    </TableCell>
                    <TableCell  align="left"  onClick={() => handleDocTypeClick(file.docType)}>
                      <div className="text-blue-500 cursor-pointer">{file.docType}</div>
                    </TableCell>
                    <TableCell align="left">
                      {file.dateAdded}
                    </TableCell>
                    <TableCell align="left">
                    <FileIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>


      <div className="mt-4 flex items-center">
        <label htmlFor="itemsPerPage" className="mr-2 text-gray-700">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="py-2 px-3 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-bcgClr cursor-pointer"
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
          
      <div className={`${isFileUploadVisible ? "-translate-x-0" : "translate-x-full"} h-full fixed top-0 right-0 bg-white shadow-lg z-50 duration-300 ease-out transition-all w-4/5`} ref={modalRef}>
        <Fileupload  onFileUpload={handleFileUpload} onFileclose={handleFileClose}/>
      </div>


          <div className="absolute top-0 right-1 ">
            <button
              onClick={toggleFileUpload}
              className="w-14 h-14 bg-bcgClr pb-1 text-white shadow-md rounded-full flex items-center justify-center text-4xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

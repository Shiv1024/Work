import React, { useState, useEffect, useRef } from "react";
import FileUpload from "./FileUpload";

const Landing = ({isFileUploadVisible, closeFileUpload, setIsFileUploadVisible, fileUploadRef}) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const [files, setFiles] = useState([]); // State to hold files data

  const[asc, setasc]=useState(true);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const toggleFileUpload = () => {
    setIsFileUploadVisible(!isFileUploadVisible);
  };

  

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]); // Update files state with new file
    closeFileUpload(); // Close file upload modal after upload
  };

  

  


  const sortByClient = () => {

    asc?setFiles(files.sort((a, b) => a.name.localeCompare(b.name))): setFiles(files.sort((a, b) => b.name.localeCompare(a.name)));
    
    setasc(!asc);
  
  };
  const sortByBank = () => {

    asc?setFiles(files.sort((a, b) => {return new Date(b.date) - new Date(a.date);})): setFiles(files.sort((a, b) => {return new Date(a.date) - new Date(b.date);}));
    
    setasc(!asc);
  
  };

  const sortByStatus = () => {}
  const sortByParser = () => {}
  const sortByDate = () => {}
  return (
    <div>
    <div className="container mx-auto mt-2 p-4 relative">
      <table className="min-w-full bg-gray-200 border border-gray-400 relative shadow-lg">
        <thead>
          <tr className="bg-bcgClr text-white">
            <th className="py-3 px-4 border-b border-gray-200 text-left hover:cursor-pointer" onClick={()=>{sortByClient()}}>Client Name</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left hover:cursor-pointer" onClick={()=>{sortByBank()}}>Bank</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left hover:cursor-pointer" onClick={()=>{sortByStatus()}}>Status</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left hover:cursor-pointer" onClick={()=>{sortByParser()}}>Parsed By</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left hover:cursor-pointer" onClick={()=>{sortByDate()}}>Uploaded Date</th>
          </tr>
        </thead>
        <tbody>
            
            {files.map((file, index) => (
              <tr key={index} className="text-center">
                <td className="py-3 px-4 border-b border-gray-200 text-left" >{file.name}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">Random Bank</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left text-green-600">SUCCESS</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">Random Person </td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">{file.dateAdded}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="absolute top-0 right-0">
        <button
          onClick={toggleFileUpload}
          className="w-14 h-14 bg-bcgClr pb-1 text-white shadow-md rounded-full flex items-center justify-center text-4xl"
        >
          +
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <label htmlFor="itemsPerPage" className="mr-2 text-gray-700">Items per page:</label>
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
      <div className={`${isFileUploadVisible? "":"invisible"}`}>
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 duration-300 ease-out  transition-all ${
            isFileUploadVisible ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "80%" }}
          ref={fileUploadRef}
        >
          <FileUpload onClose={closeFileUpload} onFileUpload={handleFileUpload} />
        </div>
      </div>
    </div></div>
  )
}

export default Landing
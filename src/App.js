import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import FileUpload from "./Components/FileUpload";

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFileUploadVisible, setIsFileUploadVisible] = useState(false);
  const [files, setFiles] = useState([]); // State to hold files data

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const toggleFileUpload = () => {
    setIsFileUploadVisible(!isFileUploadVisible);
  };

  const closeFileUpload = () => {
    setIsFileUploadVisible(false);
  };

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]); // Update files state with new file
    closeFileUpload(); // Close file upload modal after upload
  };

  const fileUploadRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fileUploadRef.current && !fileUploadRef.current.contains(event.target)) {
        closeFileUpload();
      }
    };

    if (isFileUploadVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFileUploadVisible]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-2 p-4 relative">
        <table className="min-w-full bg-gray-200 border border-gray-400 relative shadow-lg">
          <thead>
            <tr className="bg-bcgClr text-white">
              <th className="py-3 px-4 border-b border-gray-200 text-left">Client Name</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Bank</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Status</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Parsed By</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Uploaded Date</th>
            </tr>
          </thead>
          <tbody>

              {files.map((file, index) => (
                <tr key={index} className="text-center">
                  <td className="py-3 px-4 border-b border-gray-200 text-left">Random Client</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-left">Random Bank</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-left text-green-600">SUCCESS</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-left">Random Person</td>
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
      </div>
    </div>
  );
}

export default App;

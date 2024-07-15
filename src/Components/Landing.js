import React, { useState, useRef, useEffect } from "react";
import FileUpload from "./FileUpload";
import FileIcon from "./FileIcon.js";

const Landing = ({
  isFileUploadVisible,
  closeFileUpload,
  setIsFileUploadVisible,
  fileUploadRef,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [files, setFiles] = useState([]);
  const [asc, setAsc] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to close modal when clicking outside
    const handleClickOutside = (event) => {
      console.log(event)
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

  return (
    <div className="container mx-auto mt-2 p-4 relative">
      <div className="-my-2 overflow-x-auto">
        <table className="min-w-full bg-gray-200 border border-gray-400 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-bcgClr text-white">
              <th className="py-3 px-4 border-b border-gray-200 text-left cursor-pointer" onClick={sortByClient}>
                Client Name
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left cursor-pointer" onClick={sortByBank}>
                Bank
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Status
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Parsed By
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
                <td className="py-3 px-4 border-b border-gray-200 text-left">{file.name}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">Random Bank</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left text-green-600">SUCCESS</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">Random Person</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left">{file.dateAdded}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-left"><FileIcon /></td>
              </tr>
            ))}
          </tbody>
        </table>
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

      <div className={`${isFileUploadVisible ? "" : "hidden"} fixed top-0 right-0 h-full bg-white shadow-lg z-50 duration-300 ease-out transition-all w-4/5`} ref={modalRef}>
        <FileUpload  onFileUpload={handleFileUpload} />
      </div>

      <div className="absolute top-0 right-0">
        <button
          onClick={toggleFileUpload}
          className="w-14 h-14 bg-bcgClr pb-1 text-white shadow-md rounded-full flex items-center justify-center text-4xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Landing;

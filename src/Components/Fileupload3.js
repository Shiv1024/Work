import React, { useState } from "react";
import Navbar from "./NavbarFileupload";
import CloseIcon from '@mui/icons-material/Close';

const Fileupload = ({ onFileUpload,onFileclose }) => {
  const [files, setFiles] = useState([]);
  const [isSaveOptionOpen, setIsSaveOptionOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file,setFile]=useState([]);
  const [selectedOption, setSelectedOption] = useState("EWS");
  
  const handleFiles = (fileList) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.type !== "application/pdf") {
        setErrorMessage("Please upload only PDF files.");
        return;
      }
      const newFile = {
        name: file.name,
        dateAdded: new Date().toLocaleDateString(),
        type: file.type,
        size: (file.size / 1024).toFixed(2) + " KB",
        docType: selectedOption
      };
      setFiles([...files,newFile]); // Only keep the most recent file
      setErrorMessage("");
      setIsSaveOptionOpen(true);
      onFileUpload(newFile);
    }
  };
  const handleFileChange = (fileList) => {
    handleFiles(fileList);
  };
  const handleChange = (event) => {
    setFile([...event.target.files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFile([...event.dataTransfer.files]);
  };

  const handleSave = () => {
    handleFileChange(file);
    handleClose();
  };

  const handleClose = () => {
    setFile([]);
    onFileclose();
  };

  const removeFile = () => {
    setFile([]);
  };

  const optionChange = (option) => {
    setSelectedOption(option);
  }

  return (
    <div>
      <Navbar
      SelectedOption = {optionChange} 
      />
      <div className="pt-4 min-h-screen">
        {!file.length ? (
          <div
            className="bg-bgClr5 h-120 border-2 border-dashed border-gray-600 rounded-md m-6 flex flex-col items-center justify-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-row items-center">
              <input
                type="file"
                accept=".pdf"
                onChange={handleChange}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="px-4 py-2 bg-bcgClr text-white rounded cursor-pointer"
              >
                Add File
              </label>
              <span className="text-gray-600 text-xl px-2">or Drop it here!</span>
            </div>
          </div>
        ) : (
          <div className="bg-white p-4 flex flex-row m-6 ">
            <span className="text-lg">{file[0].name}</span>
            <button
              className="text-black-500 text-lg px-6"
              onClick={removeFile}
            >
              <CloseIcon/>
            </button>
          </div>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
    
        <div className="flex justify-around mt-4">
        <button
            className="px-4 py-2 bg-bcgClr text-white rounded"
            onClick={handleSave}
        >
            Save & Process File
        </button>
        <button
            className="px-4 py-2 bg-bcgClr text-white rounded"
            onClick={handleClose}
        >
            Close
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Fileupload;

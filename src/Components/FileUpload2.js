import React, { useState } from "react";
import Modal from "./modals";
import { useNavigate } from "react-router-dom";
import gif from "../Assets/progressIndicator.gif";

const FileUpload = ({ onFileUpload }) => {
  const [uploadMessage, setUploadMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [isGifVisible, setIsGifVisible] = useState(false);
  const navigate = useNavigate();

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
      };
      setFiles([...files, newFile]);
      setUploadMessage("File uploaded successfully!");
      onFileUpload(newFile); // Call parent handler to update files in App.js
    }
  };

  const handleFileChange = (fileList) => {
    setIsGifVisible(true);
    setTimeout(() => {
      setIsGifVisible(false);
      setIsModalOpen(false);
      handleFiles(fileList);
      navigate("/creditscorepage");
    }, 5000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md text-center">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-bcgClr text-white rounded"
        >
          Upload File
        </button>
      </div>
      {uploadMessage && <p className="mt-4 text-green-500">{uploadMessage}</p>}
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        onFileChange={handleFileChange}
        errorMessage={errorMessage}
      />
      {isGifVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <img src={gif} alt="Loading" className="w-[240px] h-[300px]" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;

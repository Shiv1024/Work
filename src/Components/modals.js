import React, { useState } from 'react';

const Modal = ({ show, onClose, onFileChange, errorMessage }) => {
  const [isSaveOptionOpen, setIsSaveOptionOpen] = useState(false);
  const [files, setFiles] = useState([]);

  if (!show) return null;

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsSaveOptionOpen(true);
    setFiles([...event.dataTransfer.files]);
  };

  const handleChange = (e) => {
    setIsSaveOptionOpen(true);
    setFiles([...e.target.files]);
  };

  const handleSave = () => {
    onFileChange(files);
    handleclose();
  };
  const handleclose = () => {
    setFiles([]);
    setIsSaveOptionOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl mb-4 ">Upload a File</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleChange}
          className="mb-4 "
        />
        <p className="my-4 text-gray-600">or drag and drop your file here</p>
        <div
          className="border-2 border-dashed border-gray-300 p-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drop your file here
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg mb-2">Files:</h3>
            <ul className="list-disc list-inside">
              {Array.from(files).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
        <div className={`flex ${isSaveOptionOpen ? "justify-between" : "justify-end"} mt-4`}>
          {isSaveOptionOpen && (
            <button
              className="px-4 py-2 bg-bcgClr text-white rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
          )}
          <button
            className="px-4 py-2 bg-bcgClr text-white rounded mr-2"
            onClick={handleclose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

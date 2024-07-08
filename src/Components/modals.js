import React from 'react';

const Modal = ({ show, onClose, onFileChange, errorMessage }) => {
  if (!show) return null;

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onFileChange(event.dataTransfer.files);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl mb-4">Upload a File</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => onFileChange(e.target.files)}
          className="mb-4"
        />
        <p className="my-4 text-gray-600">or drag and drop your file here</p>
        <div
          className="border-2 border-dashed border-gray-300 p-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drop your file here
        </div>
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-bcgClr text-white rounded mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

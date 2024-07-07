import React, { useState } from 'react';
import Modal from './modals';

const FileUpload = () => {
  const [uploadMessage, setUploadMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState([]);

  const handleFiles = (fileList) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.type !== 'application/pdf') {
        setErrorMessage('Please upload only PDF files.');
        return;
      }
      const newFile = {
        name: file.name,
        dateAdded: new Date().toLocaleString(),
        type: file.type,
        size: (file.size / 1024).toFixed(2) + ' KB'
      };
      setFiles([...files, newFile]);
      setUploadMessage('File uploaded successfully!');
      setIsModalOpen(false);
      setErrorMessage('');
    }
  };

  const handleFileChange = (fileList) => {
    handleFiles(fileList);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md text-center">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Upload File
        </button>
      </div>
      {uploadMessage && (
        <p className="mt-4 text-green-500">{uploadMessage}</p>
      )}
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        onFileChange={handleFileChange}
        errorMessage={errorMessage}
      />
      {files.length > 0 && (
        <table className="min-w-full bg-white mt-5">
          <thead>
            <tr>
              <th className="py-2">File Name</th>
              <th className="py-2">Date Added</th>
              <th className="py-2">Type</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="text-center">
                <td className="py-2">{file.name}</td>
                <td className="py-2">{file.dateAdded}</td>
                <td className="py-2">{file.type}</td>
                <td className="py-2">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUpload;

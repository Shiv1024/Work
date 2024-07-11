import React, {useEffect, useRef, useState}from 'react'
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charts from "./Components/Charts";
import Landing from './Components/Landing';
import Cards from './Components/card';
import Table from "./Components/Table";
import Clients from './Components/Clients';
function App() {
  const fileUploadRef = useRef();
  const [isFileUploadVisible, setIsFileUploadVisible] = useState(false);

  const closeFileUpload = () => {
    setIsFileUploadVisible(false);
  };

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
      <Router>
        <Routes>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/" element={<Landing isFileUploadVisible={isFileUploadVisible} closeFileUpload={closeFileUpload} setIsFileUploadVisible={setIsFileUploadVisible} fileUploadRef={fileUploadRef}/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path = "/table" element = {<Table />} />
          <Route path="/clients" element={<Clients/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

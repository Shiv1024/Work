import React, {useEffect, useRef, useState}from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charts from "./Components/Charts";
import Landing from './Components/Landing';
import Cards from './Components/card';
import Table from "./Components/Table";
import Table1 from "./Components/Table1";
import Table2 from "./Components/Table2";
import Table3 from "./Components/Table3"
import TablePage from './Components/TablePage';
import Summary from './Components/summary';
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
      <Router>
        <Routes>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/" element={<Landing isFileUploadVisible={isFileUploadVisible} closeFileUpload={closeFileUpload} setIsFileUploadVisible={setIsFileUploadVisible} fileUploadRef={fileUploadRef}/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path = "/table" element = {<Table />} />
          <Route path = "/table1" element = {<Table1 />} />
          <Route path = "/table2" element = {<Table2 />} />
          <Route path = "/table3" element = {<Table3 />} />
          <Route path = "/invoicematching" element = {<TablePage />} />
          <Route path = "/summary" element = {<Summary/>} />
          <Route path="/clients" element={<Clients/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

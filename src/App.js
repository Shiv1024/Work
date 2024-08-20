import React, {useEffect, useRef, useState}from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing';
import TablePage from './Components/TablePage';
import Clients from './Components/Clients';
import Page from './Components/page3';
// import Landingpage from './Components/Landingpage';
import Creditscore from './Components/Bank Score/Creditscorepage';
import Personalinfo from './Components/Product3/PersonalInfo';
import Option4 from "./Components/Product3/Option4";
import SMSParsing from './Components/SMS parsing.js';
// import Fileupload from './Components/Fileupload3.js';
import Newcreditscorepage from '../src/Components/Bank Score/Newcreditscorepage.js';

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
    <div className='bg-bg-mainClr'>
      <Router>
        <Routes>
          <Route path="/" element={<Landing isFileUploadVisible={isFileUploadVisible} closeFileUpload={closeFileUpload} setIsFileUploadVisible={setIsFileUploadVisible} fileUploadRef={fileUploadRef}/>}/>
          <Route path = "/invoicematching" element = {<TablePage />} />
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/page" element={<Page/>}/>
          <Route path="/creditscorepage" element={<Creditscore/>}/>
          <Route path="/info" element={<Personalinfo/>}/>
          <Route path="/cibilinfo" element={<Option4/>}/>
          {/* <Route path="/credit" element={<Landingpage isFileUploadVisible={isFileUploadVisible} closeFileUpload={closeFileUpload} setIsFileUploadVisible={setIsFileUploadVisible} fileUploadRef={fileUploadRef}/>}/> */}
          {/* <Route path="/new" element={<Fileupload/>}/> */}
          <Route path="/newcreditscorepage" element={<Newcreditscorepage/>}/>
          <Route path="/sms" element={<SMSParsing/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

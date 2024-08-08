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
import Page from './Components/page3';
import Landingpage from './Components/Landingpage';
import Creditscore from './Components/Bank Score/Creditscorepage';
import GST from './Components/Bank Score/GST';
import BS from './Components/Bank Score/BS';
import CIBIL from './Components/Bank Score/CIBIL';
import Personalinfo from './Components/Product3/PersonalInfo';
import Enquiries from "./Components/Product3/Enquiries";
import Option4 from "./Components/Product3/Option4";
import Amounts from './Components/Product3/Amount/Amounts.js';
import SMSParsing from './Components/SMS parsing.js';
import Fileupload from './Components/Fileupload3.js';
import VolatilityGauge from './Components/VolatilityGauge.js';
import HorizontalBar from './Components/NewCibilScore.js';
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
          <Route path="/creditscorepage" element={<Creditscore/>}/>
          <Route path="/page" element={<Page/>}/>
          <Route path="/GST" element={<GST/>}/>
          <Route path="/BS" element={<BS/>}/>
          <Route path="/CIBIL" element={<CIBIL/>}/>
          <Route path="/info" element={<Personalinfo/>}/>
          <Route path="/enquiry" element={<Enquiries/>}/>
          <Route path="/cibilinfo" element={<Option4/>}/>

          <Route path="/credit" element={<Landingpage isFileUploadVisible={isFileUploadVisible} closeFileUpload={closeFileUpload} setIsFileUploadVisible={setIsFileUploadVisible} fileUploadRef={fileUploadRef}/>}/>
           <Route path='/newcibil' element={<HorizontalBar value1={1} value2={2} value3={4} value4={7} head='Asset Loan' isEnquiry={true}/>}/>
           <Route path="/gauge" element={<VolatilityGauge value={700}/>}/>

          <Route path="/amount" element={<Amounts/>}/>
          <Route path="/sms" element={<SMSParsing/>}/>
          <Route path="/new" element={<Fileupload/>}/>
          <Route path="/newcreditscorepage" element={<Newcreditscorepage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

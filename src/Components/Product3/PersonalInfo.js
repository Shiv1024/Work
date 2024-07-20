import React from "react";
import Sidebar from "../Sidebar3";
import Cards from "../card";
const Personalinfo=()=>{
    const cardinfo=[
      { label: "Total Active Loan Outstanding", value: 130672181 },
      { label: "Number of Overdues", value: 3 },
      { label: "Total Enquiries", value: 143 },
      { label: "Enquiries in last 1 Month", value: 2 },
      { label: "Enquiries in Last 12 Months", value: 61 },
      { label: "Number of Loans 50k plus in Last 6 Months", value: 0 },
      { label: "Amount of Loans in Last 6 Months", value: 0 }
    ];
    const personalInfo = [
      { label: "Name", value: "JAY DIPAKKUMAR JHAVERI S/O DIPAK JHAVERI" },
      { label: "CIBIL Score", value: 734 },
      { label: "Date of Birth", value: "14-02-1991" },
      { label: "Mobile Number/s", value: "8980022750, 919664652047, 919664652047" },
      { label: "Mail Ids", value: "jayjhaveri8161@gmail.com, jayjhaveri8161@gmail.com, saffronyarns@gmail.com, saffronyarns@gmail.com" },
      { label: "Address/es with dates", value: "PLOT NO 12 MOHANDWAR SOCIETY BHARTHANA SURAT GUJARAT 395007 (Reported on: 31-01-2024); E3ROAD NO 8 SALABD PURA RUPAM CINEMA SURAT,GUJARAT SURAT GUJARAT 395003 (Reported on: 31-12-2023); 3-2885, SALABAT PURA, NEAR RUP AM CINEMA SURAT CITY SURAT GUJARAT 395003 (Reported on: 31-12-2023); PLOT NO. 12, BHARTHANA MOHANDWAR SOCIETY , GUJARAT 395007 (Reported on: 31-12-2023)" },
      { label: "PAN No. (as reported)", value: "ALXPJ5729R" },
      { label: "Passport No. (as reported)", value: "" },
      { label: "Aadhar No. (as reported)", value: "XXXXXXXXXXXX" },
      { label: "Other IDs (as reported)", value: "30041497894988" },
      { label: "Date of oldest Loan", value: "30-03-2015" },
    ];
    return(
     <div className="flex">
      <div className='flex-none '>
      <Sidebar/>
      </div> 
      <div className="flex flex-col">
        <div className="lg:ml-56 md:ml-48 ml-32 ">
        <Cards
          cardinfo={cardinfo}
        />
        </div>
        <div className="lg:ml-56 md:ml-48 ml-32 mt-4 p-4">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <tbody>
                {personalInfo.map((item, index) => (
                  <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-bgClr3' : 'bg-white'}`}>
                    <td className="px-4 py-2 text-left font-semibold  text-bcgClr">{item.label}</td>
                    <td className="px-4 py-2 text-right">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>

  );
}
export default Personalinfo;
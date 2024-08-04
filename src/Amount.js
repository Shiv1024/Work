// import React from 'react'
// import AmountCountTable from './Components/AmountCountTable'
// import AmountCountGraph from './Components/AmountCountGraph'
// import AmountTable from './Components/AmountTable'
// import AmountGraph from './AmountGraph'
// import Sidebar from './Components/Sidebar3'
// import HorizontalBar from './Components/NewCibilScore'
// // import dataJSONcount from '../Assets/dummydataAmtCnt.json'

// const Amount = () => {

//   return (
//     // <div>
//     //     <AmountCountTable/>
//     //     <AmountCountGraph/>
//     //     <AmountTable/>
//     //     <AmountGraph/>
//     // </div>

//     <div className="flex">
//       <div className='flex-none'>
//         <Sidebar />
//       </div>
//       <div className="ml-32 md:ml-48 lg:ml-56 w-full flex flex-col items-center justify-center mt-4 p-4">
//         <div className="max-w-4xl w-full">
//           <h1 className="text-2xl font-bold mb-4 text-center">Enquiry Count</h1>
//           {/* <div className="overflow-x-auto">
//             <Table data={enquiryCountData} type='count' />
//           </div> */}
//           <div className="w-full">
//             {/* <HorizontalBar value1={1} value2={2} value3={4} value4={7} head='Asset Loan'/> */}
//             {dataJSONcount.map((row) => (
//               <HorizontalBar
//                 key={row.category} // Ensure key is unique for each item
//                 value1={row.enquiries3Months}
//                 value2={row.enquiries6Months}
//                 value3={row.enquiriesBeyond6Months}
//                 value4={row.total}
//                 head={row.category}
//               />
//             ))}
//           </div>
//           <div className="overflow-x-auto mt-4">
//             {/* <BarGraph data={enquiryCountData} /> */}
//           </div>
//         </div>
//         <div className="max-w-4xl w-full mt-8">
//           <h1 className="text-2xl font-bold mb-4 text-center">Enquiry Amount</h1>
//           <div className="overflow-x-auto">
//             {/* <Table data={enquiryAmountData} type='enquiry' /> */}
//           </div>
//           <div className="overflow-x-auto mt-4">
//             {/* <BarGraph data={enquiryAmountData} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Amount
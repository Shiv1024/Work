import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Sidebar from "./Sidebar";
import Table1 from "./Table1";
import Table2 from "./Table2";
import DataTable from './NewTableMUI';
// import DataTable from './Table1';

const TablePage = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
      navigate(`/clients`);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr text-white flex items-center">
                        <div className="p-4">
                           <button className="px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
                             <ArrowBackIosIcon />
                           </button>
                        </div>
                        <h1 className="text-white text-2xl py-4 px-4 font-semibold mx-auto">Client's Name</h1>
                    </div>
                    {/* <Table1 /> */}
                    {/* <DataTable/> */}
                    <DataTable/>
                    <Table2 />
                </div>
            </div>
        </div>
    );
};

export default TablePage;

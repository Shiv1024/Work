import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from "@mui/icons-material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Sidebar from "./Sidebar";
import Table1 from "./Table1";
import Table2 from "./Table2";
import DataTable from './NewTableMUI';

const TablePage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/clients');
    };

    const handleExitClick = () => {
        navigate('/');
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-36 md:ml-52 lg:ml-60 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    <div className="w-full border-l border-gray-600 h-12 md:h-16 lg:h-20 mb-4 bg-bcgClr bg-gradient-to-tl to-bcgClr from-bgToClr text-white flex items-center">
                        <div className="p-4 relative group">
                            <button className="px-2 py-2 hover:scale-105 active:scale-95" onClick={handleBackClick}>
                                <ArrowBack />
                            </button>
                            <div className="absolute top-1/2 right-0 transform translate-x-1/2 translate-y-1/4 mt-2 px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                              Home
                            </div>
                        </div>
                        <h1 className="text-white text-2xl py-4 px-4 font-medium mx-auto">Client's Name</h1>
                        <div className="relative group">
                            <button className="pr-4 py-2 hover:scale-105 active:scale-95" onClick={handleExitClick}>
                                <ExitToAppIcon  
                                    className="cursor-pointer transform rotate-180"
                                    style={{ fontSize: '32px' }} 
                                /> 
                            </button>
                            <div className="absolute top-1/2 left-0 transform -translate-x-full translate-y-1/8 mt-2 px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Back to Dashboard
              </div>
                        </div>
                    </div>
                    <DataTable />
                    <Table2 />
                </div>
            </div>
        </div>
    );
};

export default TablePage;

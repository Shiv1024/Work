import React from 'react';
import Sidebar from "./Sidebar";
import Table1 from "./Table1";
import Table2 from "./Table2";

const TablePage = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-32 md:ml-48 lg:ml-56 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    <div className="w-full border-l border-gray-400 h-12 md:h-16 lg:h-20 bg-bcgClr flex flex-col justify-center">
                        <h1 className="text-white text-base md:text-lg lg:text-xl ml-4">Client's Name</h1>
                    </div>
                    <Table1 />
                    <Table2 />
                </div>
            </div>
        </div>
    );
};

export default TablePage;

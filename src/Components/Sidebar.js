import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="bg-bcgClr w-56 min-h-screen p-4 text-white flex flex-col">
            <h2 className="text-2xl text-center mb-4">Information</h2>
            <div className="flex-1">
            <Link to={"/clients"}>
                <div className="mb-2 cursor-pointer">
                    <p className="block px-4 py-2 text-center text-white rounded hover:bg-white hover:text-bcgClr">Executive Summary</p>
                </div>
            </Link>
                <Link to={"/tablepage"}>
                <div className="mb-2 cursor-pointer">
                    <p className="block px-4 py-2 text-center text-white border-0 rounded hover:bg-white hover:text-bcgClr">Invoice Match</p>
                </div>
                </Link>
            </div>
        </div>
    );
};
export default Sidebar;

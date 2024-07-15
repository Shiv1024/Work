import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 bg-bcgClr w-32 lg:w-56 md:w-48 min-h-screen p-4 text-white flex flex-col">
            <h2 className="text-sm md:text-xl lg:text-2xl text-center mb-4 mt-2">Information</h2>
            <div className="flex-1">
                <Link to={"/clients"}>
                    <div className="mb-2 cursor-pointer">
                        <p className="block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-center text-white rounded hover:bg-white hover:text-bcgClr">
                            Executive Summary
                        </p>
                    </div>
                </Link>
                <Link to={"/invoicematching"}>
                    <div className="mb-2 cursor-pointer">
                        <p className="block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-center text-white border-0 rounded hover:bg-white hover:text-bcgClr">
                            Invoice Match
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FullWhiteIcon from '../Assets/icons/Full_White.png'
import SummarizeIcon from '@mui/icons-material/Summarize';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setisOpen]=useState(true)

    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "text-white hover:bg-white hover:text-bcgClr";
    };

    return (
        <div className={`fixed top-0 left-0  h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr transition-all duration-300 ease-in-out ${isOpen?'w-36 lg:w-60 md:w-52' : ''} `}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
            <img src={FullWhiteIcon} alt="Full White Icon" />
            </div>
            {/* <h2 className="mt-24  text-base md:text-xl lg:text-2xl text-center p-4">Information</h2> */}
            <div className="mt-24 flex-1">
            <hr className="mb-6 border-gray-300" />
                <Link to={"/clients"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/clients")}`}>
                            <SummarizeIcon className="mr-2 inline-block"/>
                            Executive Summary
                        </p>
                    </div>
                </Link>
                <Link to={"/invoicematching"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/invoicematching")}`}>
                        <ReceiptIcon className="mr-2 inline-block"/>
                            Invoice Match
                        </p>
                    </div>
                </Link>
                <Link to={"/page"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/page")}`}>
                        <LeaderboardIcon className="mr-2 inline-block"/>
                           Option-3
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

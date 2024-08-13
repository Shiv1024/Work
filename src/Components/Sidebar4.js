import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FullWhiteIcon from '../Assets/icons/Full_White.png'
import SmsIcon from '@mui/icons-material/Sms';
const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setisOpen]=useState(true)

    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "text-white hover:bg-white hover:text-bcgClr";
    };

    return (
        <div className={`fixed top-0 left-0  h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr transition-all duration-300 ease-in-out  ${isOpen?'w-32 lg:w-56 md:w-48' : ''} `}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
            <img src={FullWhiteIcon} alt="Full White Icon" /> {/* Use imported image */}
            </div>
            <h2 className="mt-24  text-base md:text-xl lg:text-2xl text-center p-4">Information</h2>
            <div className="flex-1">
                <Link to={"/sms"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/sms")}`}>
                            <SmsIcon className="mr-2 inline-block"/>
                            SMS Parsing
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

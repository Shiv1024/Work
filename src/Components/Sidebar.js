import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FullWhiteIcon from '../Assets/icons/Full_White.png'

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setisOpen]=useState(true)

    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "text-white hover:bg-white hover:text-bcgClr";
    };

    return (
        <div className={`fixed top-0 left-0  h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr ${isOpen?'w-32 lg:w-56 md:w-48' : ''} `}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
            <img src={FullWhiteIcon} alt="Full White Icon" /> {/* Use imported image */}
            </div>
            <h2 className="mt-24  text-base md:text-xl lg:text-2xl text-left p-4">Information</h2>
            <div className="flex-1">
                <Link to={"/clients"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded ${getActiveClass("/clients")}`}>
                            Executive Summary
                        </p>
                    </div>
                </Link>
                <Link to={"/invoicematching"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded ${getActiveClass("/invoicematching")}`}>
                            Invoice Match
                        </p>
                    </div>
                </Link>
                <Link to={"/page"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded ${getActiveClass("/page")}`}>
                           Option-3
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

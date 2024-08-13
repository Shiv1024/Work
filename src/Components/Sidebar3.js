import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InfoIcon from '@mui/icons-material/Info';
import FullWhiteIcon from '../Assets/icons/Full_White.png';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);

    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "text-white hover:bg-white hover:text-bcgClr";
    };

    return (
        <div className={`fixed top-0 left-0 h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr ${isOpen ? 'w-32 lg:w-56 md:w-48' : ''}`}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
                <img src={FullWhiteIcon} alt="Full White Icon" /> {/* Use imported image */}
            </div>
            <h2 className="mt-20 text-base md:text-xl lg:text-2xl text-left p-4">Information</h2>
            <div className="flex-1">
                <Link to={"/info"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ${getActiveClass("/info")}`}>
                            <PermIdentityIcon className="mr-2 inline-block" />
                            Customer Information
                        </p>
                    </div>
                </Link>

                <Link to={"/enquiry"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ${getActiveClass("/enquiry")}`}>
                            Enquiries Information
                        </p>
                    </div>
                </Link>

                <Link to={"/cibilinfo"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ${getActiveClass("/cibilinfo")}`}>
                            <InfoIcon className="mr-2 inline-block" />
                            Cibil Info Personal and Company
                        </p>
                    </div>
                </Link>

                <Link to={"/amount"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ${getActiveClass("/amount")}`}>
                            Amount Information
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

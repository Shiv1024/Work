import React, { useState } from "react";
import { Link,useLocation,useNavigate} from "react-router-dom";
import FullWhiteIcon from '../Assets/icons/Full_White.png';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InfoIcon from '@mui/icons-material/Info';
import { ArrowBack } from "@mui/icons-material";

const Sidebar = () => {
    const location = useLocation();
    // const history = useHistory(); // Hook for navigating
    const [isOpen, setisOpen] = useState(true);
    const navigate=useNavigate();
    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "text-white hover:bg-white hover:text-bcgClr";
    };

    return (
        <div className={`fixed top-0 left-0 h-full p-3 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr transition-all duration-300 ease-in-out ${isOpen ? 'w-36 lg:w-60 md:w-52' : ''}`}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
               
                <img src={FullWhiteIcon} alt="Full White Icon" />
            </div>
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
                <Link to={"/page"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/page")}`}>
                            <InfoIcon className="mr-2 inline-block"/>
                            Company Details
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
               
            </div>
        </div>
    );
};

export default Sidebar;

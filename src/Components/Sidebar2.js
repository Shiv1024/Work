import React, { useState } from "react";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InfoIcon from '@mui/icons-material/Info';
import FullWhiteIcon from '../Assets/icons/Full_White.png';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { ArrowBack } from "@mui/icons-material";
const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);
    const navigate=useNavigate();
    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-white text-bcgClr"
            : "bg-white text-bcgClr";
    };

    return (

        <div className={`fixed top-0 left-0 h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr transition-all duration-300 ease-in-out ${isOpen ? 'w-36 lg:w-60 md:w-52' : ''}`}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
                {/* Back Button */}
                <ArrowBack 
                    className="cursor-pointer mb-4" 
                    onClick={() => navigate('/')} 
                />
                <img src={FullWhiteIcon} alt="Full White Icon" />
            </div>
            <div className="mt-32 flex-1">
                <hr className="mb-6 border-gray-300" />
                {/* <Link to={"/creditscorepage"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/creditscorepage")}`}>
                            <CreditScoreIcon className="mr-2 inline-block"/>
                            Credit Score 
                        </p>
                    </div>
                </Link> */}
                <Link to={"/newcreditscorepage"}>
                    <div className="mb-2 cursor-pointer">
                        <p className={`block px-2 py-1 text-xs md:text-sm md:px-4 md:py-2 lg:text-base lg:px-4 lg:py-2 text-left rounded transition-colors duration-300 ease-in-out ${getActiveClass("/newcreditscorepage")} `}>
                            <CreditScoreIcon className="mr-2 inline-block"/>
                            New Credit Score
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

import React, { useState } from "react";

import FullWhiteIcon from '../Assets/icons/Full_White.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (

        <div className={`fixed top-0 left-0 h-full p-4 text-white flex flex-col z-50 bg-gradient-to-tl to-bcgClr from-bgToClr transition-all duration-300 ease-in-out  ${isOpen ? 'w-32 lg:w-56 md:w-48' : ''}`}>
            <div className="fixed block top-0 left-0 w-32 lg:w-56 md:w-48 p-4 text-white flex flex-col">
                <img src={FullWhiteIcon} alt="Full White Icon" /> {/* Use imported image */}
            </div>
        </div>
    );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import FullWhiteIcon from "../Assets/icons/Full_White.png"; // Import the image file

const MainSidebar = () => {
    return (
        <div className="fixed top-0 left-0 bg-bcgClr w-32 lg:w-56 md:w-48 h-full p-4 text-white flex flex-col">
            <img src={FullWhiteIcon} alt="Full White Icon" /> {/* Use imported image */}
        </div>
    );
};

export default MainSidebar;

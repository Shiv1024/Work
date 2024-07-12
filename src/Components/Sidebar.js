import React from "react";

const Sidebar = () => {
    return (
        <div className="bg-bcgClr w-64 min-h-screen p-4 text-white flex flex-col">
            <h2 className="text-2xl text-center mb-4">Information</h2>
            <ul className="flex-1">
                <li className="mb-2">
                    <a href="#" className="block px-4 py-2 text-center rounded hover:bg-white hover:text-bcgClr">Option 1</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block px-4 py-2 text-center rounded hover:bg-white hover:text-bcgClr">Option 2</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block px-4 py-2 text-center rounded hover:bg-white hover:text-bcgClr">Option 3</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block px-4 py-2 text-center rounded hover:bg-white hover:text-bcgClr">Invoice Match</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

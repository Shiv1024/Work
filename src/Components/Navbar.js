import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    React.useEffect(() => {
        window.addEventListener('click', closeDropdown);
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="bg-white border-2 border-gray-300 p-3">
            <div className="mx-auto flex justify-end items-center">
                <span className="text-gray-600 mr-2">user@example.com</span>
                <img
                    src="https://via.placeholder.com/30"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-2"
                />
                <div className="relative mr-2">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center text-gray-600 focus:outline-none"
                    >
                        <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <button
                                className="block w-full text-left mt-2 px-3 py-3 text-gray-600 hover:bg-gray-200"
                                onClick={() => alert('Change password clicked')}
                            >
                                Change password
                            </button>
                            <button
                                className="block w-full text-left mb-2 px-3 py-3 text-gray-600 hover:bg-gray-200"
                                onClick={() => alert('Logout clicked')}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

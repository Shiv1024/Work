import React, { useState } from "react";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-white border-b-2 border-gray-300">
      <div className="py-4 px-4 flex flex-row text-sm font-semibold">
        {["EWS", "Credit Scoring", "Cibil Parsing", "SMS Parsing"].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 transition-colors duration-300 ${
              selectedOption === option
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

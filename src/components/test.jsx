import React, { useState } from "react";

import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const Test = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [showOptions, setShowOptions] = useState(false); // State to manage the visibility of the options container

  const handleDecrease = (type) => {
    if (type === "adults") {
      setAdults(adults > 1 ? adults - 1 : 1);
    } else if (type === "children") {
      setChildren(children > 0 ? children - 1 : 0);
      setChildAges((prevAges) => prevAges.slice(0, children - 1));
    }
  };

  const handleIncrease = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
      setChildAges((prevAges) => [...prevAges, 0]);
    }
  };

  const handleAgeChange = (index, age) => {
    const updatedAges = [...childAges];
    updatedAges[index] = age;
    setChildAges(updatedAges);
  };

  const totalTravellers = adults + children;

  return (
    <div className="border-r-4 border-purple-900 w-[13%]  flex items-center px-6 bg-white h-20 rounded-r-md relative ">
      <div className="flex flex-col gap-1 w-[80%]">
        <p className="text-xs text-gray-800 font-bold whitespace-nowrap">
          Travellers and Cabin Class
        </p>
        <input
          placeholder={`${totalTravellers} Traveller, Economy`}
          className="text-xs border-none outline-none"
          readOnly
          onFocus={() => setShowOptions(true)} // Show options container when input is clicked
        />
      </div>
      {/* Cart */}
      {showOptions && ( // Render options container only if showOptions is true
        <div className="absolute bg-white w-[400px] p-4 rounded-md mt-[260%]">
          <div className="flex justify-end">
            <button
              className="rounded-full p-1 bg-gray-200"
              onClick={() => setShowOptions(false)} // Close options container when close button is clicked
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="text-base text-slate-800 font-bold ">Adults</p>
                <p>Aged 16+</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div
                  className="p-3 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => handleDecrease("adults")}
                >
                  <FaMinus />
                </div>
                <p>{adults}</p>
                <div
                  className="p-3 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => handleIncrease("adults")}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="text-base text-slate-800 font-bold ">Children</p>
                <p>Aged 0 to 15</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div
                  className="p-3 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => handleDecrease("children")}
                >
                  <FaMinus />
                </div>
                <p>{children}</p>
                <div
                  className="p-3 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => handleIncrease("children")}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
            {children > 0 && (
              <div className="flex flex-col gap-2">
                {Array.from({ length: children }).map((_, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`age${index}`}
                      className="text-sm font-bold"
                    >
                      Age of child {index + 1}
                    </label>
                    <select
                      id={`age${index}`}
                      className="border border-gray-300 rounded-md p-2"
                      value={childAges[index]}
                      onChange={(e) =>
                        handleAgeChange(index, parseInt(e.target.value))
                      }
                    >
                      {Array.from({ length: 16 }).map((_, age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;

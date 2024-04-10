import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCloseCircle } from "react-icons/io5";

const DateSearch = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const clearDates = () => {
    setDepartDate(null);
    setReturnDate(null);
  };

  const clearReturn = () => {
    setReturnDate(null);
  };

  return (
    <div className="flex relative items-center">
      <div className="border-r-4 border-purple-900 w-[55%]  flex items-center px-6 bg-white h-20   ">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Depart</p>
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            selectsStart
            startDate={departDate}
            endDate={returnDate}
            placeholderText="Add Date"
            className="text-xs border-none outline-none"
          />
        </div>
        {departDate ? (
          <button onClick={clearDates} className="absolute z-50 left-[40%]">
            <IoCloseCircle className="h-6 w-6 text-gray-700" />
          </button>
        ) : null}
      </div>
      <div className="border-r-4 border-purple-900 w-[55%]  flex items-center px-6 bg-white h-20   ">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Return</p>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            selectsEnd
            startDate={departDate}
            endDate={returnDate}
            minDate={departDate}
            placeholderText="Add Date"
            className="text-xs border-none outline-none bg-white"
          />
        </div>
        {returnDate ? (
          <button onClick={clearReturn} className="absolute z-50 left-[90%]">
            <IoCloseCircle className="h-6 w-6 text-gray-700" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DateSearch;

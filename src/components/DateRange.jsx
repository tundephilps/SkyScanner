import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRange = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const clearDates = () => {
    setDateRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
  };

  return (
    <div className="flex relative items-center">
      <div className="border-r-4 border-purple-900 w-[55%]  flex items-center px-6 bg-white h-20">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Depart</p>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            className="text-xs border-none outline-none"
          />
        </div>
        {dateRange[0].startDate ? (
          <button onClick={clearDates} className="absolute z-50 left-[40%]">
            Clear
          </button>
        ) : null}
      </div>
      <div className="border-r-4 border-purple-900 w-[55%]  flex items-center px-6 bg-white h-20">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Return</p>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            className="text-xs border-none outline-none"
          />
        </div>
        {dateRange[0].endDate ? (
          <button onClick={clearDates} className="absolute z-50 left-[90%]">
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DateRange;

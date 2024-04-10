import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const DateRangeInput = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showDepartPicker, setShowDepartPicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const handleDepartSelect = (ranges) => {
    setDepartDate(ranges.selection.startDate);
    setReturnDate(ranges.selection.endDate);
    setShowDepartPicker(false);
  };

  const handleReturnSelect = (ranges) => {
    setDepartDate(ranges.selection.startDate);
    setReturnDate(ranges.selection.endDate);
    setShowReturnPicker(false);
  };

  const clearDepartDate = () => {
    setDepartDate(null);
    setReturnDate(null);
  };

  const clearReturnDate = () => {
    setDepartDate(null);
    setReturnDate(null);
  };

  return (
    <>
      <div className="border-r-4 border-purple-900 w-[20%] h-full flex items-center px-4 ">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Depart</p>
          <div style={{ position: "relative" }}>
            <input
              placeholder="Add Date"
              className="text-xs border-none outline-none"
              value={departDate ? departDate.toLocaleDateString() : ""}
              readOnly
              onClick={() => setShowDepartPicker(!showDepartPicker)}
            />
            {departDate && (
              <span
                className="absolute top-0 right-0 cursor-pointer"
                onClick={clearDepartDate}
              >
                ✕
              </span>
            )}
            {showDepartPicker && (
              <DateRangePicker
                onChange={handleDepartSelect}
                ranges={[
                  {
                    startDate: departDate || new Date(),
                    endDate: returnDate || new Date(),
                    key: "selection",
                  },
                ]}
                className="absolute mt-6"
                onClose={() => setShowDepartPicker(false)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="border-r-4 border-purple-900 w-[20%] h-full flex items-center px-4 ">
        <div className="flex flex-col gap-1 w-[80%]">
          <p className="text-xs text-gray-800 font-bold">Return</p>
          <div style={{ position: "relative" }}>
            <input
              placeholder="Add Date"
              className="text-xs border-none outline-none"
              value={returnDate ? returnDate.toLocaleDateString() : ""}
              readOnly
              onClick={() => setShowReturnPicker(!showReturnPicker)}
            />
            {returnDate && (
              <span
                className="absolute top-0 right-0 cursor-pointer"
                onClick={clearReturnDate}
              >
                ✕
              </span>
            )}
            {showReturnPicker && (
              <DateRangePicker
                onChange={handleReturnSelect}
                ranges={[
                  {
                    startDate: departDate || new Date(),
                    endDate: returnDate || new Date(),
                    key: "selection",
                  },
                ]}
                className="absolute mt-6"
                onClose={() => setShowReturnPicker(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateRangeInput;

import React from "react";
import { BiSolidCalendar } from "react-icons/bi";

const DatePickerMobile = () => {
  return (
    <div className="bg-white w-[50%] border-r-2 border-purple-900 rounded-bl-md flex items-center px-6  ">
      <div className="flex flex-row gap-1 items-center">
        <p className="text-base text-gray-800 font-bold">
          <BiSolidCalendar />
        </p>
        <input
          placeholder="14-21 April"
          className="text-base outline-none w-20"
          readOnly
        />
      </div>
    </div>
  );
};

export default DatePickerMobile;

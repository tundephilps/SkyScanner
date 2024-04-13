import React from "react";
import "./App.css";
import { IoMdSwap } from "react-icons/io";
import CitySearch from "./components/desktop/CitySearch";
import DateSearch from "./components/desktop/DateSearch";
import CabinClass from "./components/desktop/CabinClass";
import CabinClassMobile from "./components/mobile/CabinClass";
import DatePickerMobile from "./components/mobile/DatePicker ";
import CitySearchMobile from "./components/mobile/CitySearch";

function App() {
  return (
    <>
      {/* Desktop View */}
      <div className="min-h-[130vh]  bg-purple-900  lg:flex items-start justify-center py-12 hidden">
        {/* 
         <DateRangePicker />
        */}
        <CitySearch />
        <DateSearch />
        <CabinClass />
        <div className="bg-green-800 p-7 rounded-md items-center cursor-pointer">
          <h1 className="text-white ">Search</h1>
        </div>
      </div>
      {/* Mobile View */}
      <div className="min-h-[130vh] w-[100%] bg-purple-900  lg:hidden   py-12 sm:flex flex-col items-center justify-center relative ">
        <CitySearchMobile />
        <div className=" h-16 w-[70%] flex flex-row mx-auto">
          <DatePickerMobile />

          <CabinClassMobile />
        </div>
        <div className="bg-blue-800 h-16 w-[70%] rounded-md mt-8 mx-auto flex items-center justify-center">
          <p className="text-white font-extrabold items-center justify-center">
            Search
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

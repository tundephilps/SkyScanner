import React from "react";
import "./App.css";
import { IoMdSwap } from "react-icons/io";
import CitySearch from "./components/citysearch";
import DateSearch from "./components/DateSearch";
import DateRange from "./components/DateRange";
import DateRangePicker from "./components/DateRangePicker";
import CabinClass from "./components/CabinClass";
import Test from "./components/test";
function App() {
  return (
    <>
      <div className="min-h-[130vh]  bg-purple-900  flex items-start justify-center py-12">
        {/* 
         <DateRangePicker />
        */}
        <CitySearch />
        <DateSearch />
        <CabinClass />
        <div className="bg-green-800 p-6 rounded-md">
          <h1 className="text-white ">Search</h1>
        </div>
      </div>
    </>
  );
}

export default App;

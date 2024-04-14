import React, { useState } from "react";
import { IoMdAirplane } from "react-icons/io";
import { MdSwapVert, MdLocationOn, MdMyLocation } from "react-icons/md";

const CitySearchMobile = () => {
  const [cities, setCities] = useState([
    { city: "Brisbane", code: "BNE", country: "Australia" },
    { city: "Bali (Denpasar)", code: "DPS", country: "Indonesia" },
    { city: "Barcelona", code: "BCN", country: "Spain" },
    { city: "Bangkok Suvarnabhumi", code: "BKK", country: "Thailand" },
    { city: "Berlin Brandenburg", code: "BER", country: "Germany" },
    { city: "Budapest", code: "BUD", country: "Hungary" },
    { city: "Cairns", code: "CNS", country: "Australia" },
    { city: "Copenhagen", code: "CPH", country: "Denmark" },
    { city: "Cairo", code: "CAI", country: "Egypt" },
  ]);

  const [filteredCitiesFrom, setFilteredCitiesFrom] = useState([]);
  const [filteredCitiesTo, setFilteredCitiesTo] = useState([]);

  const [inputValueFrom, setInputValueFrom] = useState(null);
  const [inputValueTo, setInputValueTo] = useState(null);

  const handleInputChangeFrom = (e) => {
    const input = e.target.value;
    setInputValueFrom(input);
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCitiesFrom(filtered);
  };

  const handleCitySelectFrom = (city) => {
    setInputValueFrom(city.city);
    setFilteredCitiesFrom([]);
  };

  const handleInputChangeTo = (e) => {
    const input = e.target.value;
    setInputValueTo(input);
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCitiesTo(filtered);
  };

  const handleCitySelectTo = (city) => {
    setInputValueTo(city.city);
    setFilteredCitiesTo([]);
  };

  const handleSwipe = () => {
    const temp = inputValueFrom;
    setInputValueFrom(inputValueTo);
    setInputValueTo(temp);
  };

  return (
    <>
      <div className="bg-white h-16 w-[70%] border-b-2 border-purple-900 rounded-t-md mx-auto  flex items-center px-6 ">
        <div className="flex flex-row gap-1 items-center w-[80%]">
          <p className="text-base text-gray-800 font-bold">
            <MdMyLocation />
          </p>
          <input
            placeholder="PickUp Point"
            className="text-base border-none outline-none w-[70%]"
            value={inputValueFrom}
            onChange={handleInputChangeFrom}
          />

          {filteredCitiesFrom.length > 0 && (
            <ul className="absolute bg-white w-[300px] rounded-md mt-16 ">
              {filteredCitiesFrom.map((city) => (
                <li
                  key={city.code}
                  onClick={() => handleCitySelectFrom(city)}
                  className="m-4"
                >
                  <div className="flex flex-row items-center gap-3 ">
                    <div>
                      <IoMdAirplane />
                    </div>

                    <div>
                      <p className="font-bold text-sm">
                        {city.city} ({city.code})
                      </p>
                      <h1 className="text-xs"> {city.country}</h1>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="bg-white h-16 w-[70%] border-b-2 border-purple-900 mx-auto flex items-center px-6">
        <div className="flex flex-row gap-1 items-center w-[80%]">
          <p className="text-base text-gray-800 font-bold">
            <MdLocationOn />
          </p>
          <input
            placeholder="Choose Destination"
            className="text-base border-none outline-none w-[85%]"
            value={inputValueTo}
            onChange={handleInputChangeTo}
          />
          {filteredCitiesTo.length > 0 && (
            <ul className="absolute bg-white w-[300px] rounded-md mt-16 ">
              {filteredCitiesTo.map((city) => (
                <li
                  key={city.code}
                  onClick={() => handleCitySelectTo(city)}
                  className="m-4"
                >
                  <div className="flex flex-row items-center gap-3 ">
                    <div>
                      <IoMdAirplane />
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        {" "}
                        {city.city} ({city.code})
                      </p>
                      <h1 className="text-xs"> {city.country}</h1>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {inputValueFrom && inputValueTo && (
          <div
            className="  hover:rotate-180 transition-transform duration-300 rounded-full bg-white p-2 absolute border-purple-900 border-2 right-16 top-24 cursor-pointer"
            onClick={handleSwipe}
          >
            <MdSwapVert />
          </div>
        )}
      </div>
    </>
  );
};

export default CitySearchMobile;

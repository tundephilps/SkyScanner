import React from "react";
import { TiUser } from "react-icons/ti";

const CabinClassMobile = () => {
  return (
    <div className="bg-white w-[50%] rounded-br-md flex items-center px-6 ">
      <div className="flex flex-row gap-1 items-center">
        <p className="text-base text-gray-800 font-bold">
          <TiUser />
        </p>
        <input
          placeholder="1 Adult"
          className="text-base outline-none w-20"
          readOnly
        />
      </div>
    </div>
  );
};

export default CabinClassMobile;

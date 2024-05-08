import React from "react";

import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const gotToFormPage = () => {
    navigate("/form");
  };
  const gotToApiPage = () => {
    navigate("list");
  };

  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="grid grid-cols-2 gap-6 ">
        <button
          className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-red-500"
          onClick={() => gotToApiPage()}
        >
          <span className="group-hover:text-white">List API</span> 
        </button>

        <button className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-green-500">
            <span className="group-hover:text-white"> List API  </span>
        </button>
        <button
          className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-yellow-500"
          onClick={() => gotToFormPage()}
        >
            <span className="group-hover:text-white">Form Validation</span>
          
        </button>
        <button className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-blue-500">
        <span className="group-hover:text-white">List API</span>
          
        </button>
      </div>
    </div>
  );
};
export default HomeScreen;

// const ButtonData = [
//    {
//     name: "ListAPI",
//     color: "",
//    },
//    {
//     name: "Form Validation",
//     color: "",
//    },
//    {
//     name: "ListAPI",
//     color: "",
//    },
//    {
//     name: "ListAPI",
//     color: "",
//    },

// ];

import React from "react";

const HomeScreen = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="grid grid-cols-2 gap-6 ">
        {ButtonData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              className={`py-2 border rounded-md text-lg font-semibold w-36 hover:text-white text-center bg-transparent ${item.color}`}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default HomeScreen;

const ButtonData = [
  {
    name: "ListAPI",
    link: "list",
    color: "hover:bg-red-500",
  },
  {
    name: "CRUD",
    link: "crud",
    color: "hover:bg-green-500",
  },
  {
    name: "Form Validation",
    link: "form",
    color: "hover:bg-yellow-500",
  },
  {
    name: "Conditional Rendering",
    link: "Conditional_Rendering",
    color: "hover:bg-blue-500",
  },
];

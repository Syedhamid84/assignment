import React from "react";
import { useState } from "react";

const ConditionalRendering = () => {
  const [active, setActive] = useState(0);
  const [activeText, setActiveText] = useState(buttonData[0].text);
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center items-center gap-5 mt-5">
        {buttonData.map((item, index) => {
          return (
            <button
              key={index}
              className={`py-2 border rounded-md text-lg font-semibold w-36  text-center ${
                active === index ? "bg-blue-500 text-white" : "bg-transparent"
              }`}
              onClick={() => {
                setActive(index);
                setActiveText(item.text);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="border p-3 rounded-md w-[450px] ">{activeText}</div>
    </div>
  );
};
export default ConditionalRendering;
const buttonData = [
  {
    name: "button 1",
    text: "Selected text coming from first button element",
  },
  {
    name: "button 2",
    text: "Selected text coming from second button element",
  },
  {
    name: "button 3",
    text: "Selected text coming from third button element",
  },
  {
    name: "button 4",
    text: "Selected text coming from fourth button element",
  },
];

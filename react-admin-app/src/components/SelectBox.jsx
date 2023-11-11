import React from "react";

const SelectBox = ({ options }) => {
  return (
    <div className="relative inline-block w-40 mt-2 mb-4 mr-2">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-400 text-sm"
        id="grid-state"
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        {/* Arrow down icon */}
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 8l5 5 5-5z" />
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;

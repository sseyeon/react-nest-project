// Card.jsx
import React from "react";

export default function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg border border-[#e4e4e5] h-[300px] mb-4 relative overflow-hidden group transition">
      {/* title */}
      <div className="mt-3 ms-3 font-semibold">
        <h2>{title}</h2>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {/* content */}
        <div className="w-100 mx-auto flex justify-center items-center">
          {typeof content === "string" ? (
            // If content is a string, assume it's an image URL
            <img
              className="max-h-[200px] group-hover:scale-110 transition duration-300"
              src={content}
              alt=""
            />
          ) : (
            // If content is not a string, assume it's JSX or another component
            content
          )}
        </div>
      </div>
    </div>
  );
}

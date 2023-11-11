import React from "react";
import { IoCaretForward } from "react-icons/io5";

export default function PageTitle({ title }) {
  return (
    <div className="flex m-4 px-3 font-semibold">
      <IoCaretForward className="h-6 w-4 fill-current mr-1" />
      <span>{title}</span>
    </div>
  );
}

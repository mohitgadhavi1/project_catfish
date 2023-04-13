import React from "react";
import { useSelector } from "react-redux";

export default function StackVisual() {
  const { data } = useSelector((state) => state.stack);

  return (
    <div className="flex justify-center h-full w-full ">
      <div className="w-[20%] flex flex-col  justify-end  h-full border-x-2 border-gray-300 border-b-2  bg-slate-200">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-full flex justify-center border-t-2 border-gray-400 text-xl capitalize font-semibold  "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

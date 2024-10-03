import React from "react";
import { BiExport } from "react-icons/bi";

const OutputConsole = ({ currentOutput }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-[#ededed] h-16 shadow-md px-4 z-20 text-[1.25rem] font-bold flex items-center justify-between">
        Output:
        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            currentOutput.stdout ? currentOutput.stdout : currentOutput.stderr
          )}`}
          download="output.txt"
          className="font-normal flex items-center gap-[0.7rem] text-black"
        >
          <BiExport /> Export Output
        </a>
      </div>
      <textarea
        defaultValue={
          currentOutput.stdout ? currentOutput.stdout : currentOutput.stderr
        }
        disabled
        className={`${
          currentOutput.stderr ? "text-red-600" : "text-green-800"
        } flex-grow resize-none border-0 outline-none px-3 pt-2 text-[1.1rem] min-h-[250px]`}
      ></textarea>
    </div>
  );
};

export default OutputConsole;

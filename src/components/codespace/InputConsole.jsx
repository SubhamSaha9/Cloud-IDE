import React from "react";
import { BiImport } from "react-icons/bi";

const InputConsole = ({ currentInput, setCurrentInput, getFile }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-[#ededed] h-16 shadow-md px-4 z-20 text-[1.25rem] font-bold flex items-center justify-between">
        Input:
        <label
          htmlFor="inputfile"
          className="font-normal flex items-center gap-[0.7rem] text-black cursor-pointer"
        >
          <input
            type="file"
            accept="."
            id="inputfile"
            className="hidden"
            onChange={(e) => getFile(e, setCurrentInput)}
          />{" "}
          <BiImport /> Import Input
        </label>
      </div>
      <textarea
        onChange={(e) => setCurrentInput(e.target.value)}
        defaultValue={currentInput}
        className="flex-grow resize-none border-0 outline-none p-1 pt-2 text-[1.1rem] min-h-[250px]"
      ></textarea>
    </div>
  );
};

export default InputConsole;

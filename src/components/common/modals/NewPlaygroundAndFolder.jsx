import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { closeModal } from "../../../slice/modalSlice";
import { useDispatch } from "react-redux";
import { addPlaygroundAndFolder } from "../../../slice/playgroundSlice";
import Select from "react-select";
import { languageOptions } from "../../../data/selectOption";

const NewPlaygroundAndFolder = () => {
  const dispatch = useDispatch();
  const [playgroundName, setPlaygroundName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  const handleNewFileAndFolder = () => {
    dispatch(
      addPlaygroundAndFolder({
        folderName,
        FileName: playgroundName,
        cardLanguage: language.value,
      })
    );
    dispatch(closeModal());
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Create New Playground & Create New Folder</h2>
        <div className="text-[2rem] cursor-pointer bg-transparent outline-none border-0">
          <IoCloseSharp onClick={() => dispatch(closeModal())} />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_0.5fr] gap-4 mt-5 items-center">
        <label>Enter Folder Name</label>
        <input
          type="text"
          onChange={(e) => setFolderName(e.target.value)}
          className="flex-grow h-8 border-1 bg-richblack-3 border border-[#bcbcbcb3] rounded px-2"
          value={folderName}
          placeholder="Enter Folder name"
        />

        <label>Enter Card Name</label>
        <input
          type="text"
          onChange={(e) => setPlaygroundName(e.target.value)}
          className="flex-grow h-8 border-1 bg-richblack-3 border border-[#bcbcbcb3] rounded px-2"
          value={playgroundName}
          placeholder="Enter File name"
        />

        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />

        <button
          onClick={handleNewFileAndFolder}
          className="bg-[#241f21] h-10 text-white py-1 px-8 rounded"
        >
          Create Codeplay
        </button>
      </div>
    </div>
  );
};

export default NewPlaygroundAndFolder;

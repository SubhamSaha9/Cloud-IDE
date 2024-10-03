import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addFolder } from "../../../slice/playgroundSlice";
import { closeModal } from "../../../slice/modalSlice";

const NewFolder = () => {
  const [folderTitle, setFolderTitle] = useState("");

  const dispatch = useDispatch();

  const handleNewFolder = () => {
    console.log(folderTitle);
    dispatch(addFolder(folderTitle));
    dispatch(closeModal());
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Create New Folder</h2>
        <div className="text-[2rem] cursor-pointer bg-transparent outline-none border-0">
          <IoCloseSharp onClick={() => dispatch(closeModal())} />
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap pt-6 gap-8">
        <input
          type="text"
          onChange={(e) => setFolderTitle(e.target.value)}
          className="flex-grow h-8 border-1 bg-richblack-3 border border-[#bcbcbcb3] rounded px-2"
          placeholder="Enter folder name"
          value={folderTitle}
        />
        <button
          onClick={handleNewFolder}
          className="bg-[#241f21] h-10 text-white py-1 px-8 rounded"
        >
          Create Folder
        </button>
      </div>
    </div>
  );
};

export default NewFolder;

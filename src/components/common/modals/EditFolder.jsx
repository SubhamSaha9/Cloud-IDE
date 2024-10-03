import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFolderTitle } from "../../../slice/playgroundSlice";
import { closeModal } from "../../../slice/modalSlice";
import { IoCloseSharp } from "react-icons/io5";

const EditFolder = () => {
  const dispatch = useDispatch();
  const { identifiers } = useSelector((state) => state.modal);
  const { folders } = useSelector((state) => state.codeplay);
  const folderId = identifiers.folderId;
  const [folderTitle, setFolderTitle] = useState(
    folders.filter((folder) => folder.id === folderId)[0].title
  );

  const handleUpdateFolder = () => {
    dispatch(editFolderTitle({ folderId, folderTitle }));
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Edit Folder Title</h2>
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
          onClick={handleUpdateFolder}
          className="bg-[#241f21] h-10 text-white py-1 px-8 rounded"
        >
          Update Folder
        </button>
      </div>
    </div>
  );
};

export default EditFolder;

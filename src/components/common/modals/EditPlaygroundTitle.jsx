import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { closeModal } from "../../../slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { editPlaygroundTitle } from "../../../slice/playgroundSlice";

const EditPlaygroundTitle = () => {
  const dispatch = useDispatch();

  const { identifiers } = useSelector((state) => state.modal);
  const { folders } = useSelector((state) => state.codeplay);
  const { folderId, cardId } = identifiers;
  const folder = folders.find((folder) => folder.id === folderId);
  const [playgroundTitle, setPlaygroundTitle] = useState(
    folder.files.filter((file) => file.id === cardId)[0].title
  );

  const handleUpdateFile = () => {
    dispatch(editPlaygroundTitle({ folderId, cardId, playgroundTitle }));
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
          onChange={(e) => setPlaygroundTitle(e.target.value)}
          className="flex-grow h-8 border-1 bg-richblack-3 border border-[#bcbcbcb3] rounded px-2"
          placeholder="Enter folder name"
          value={playgroundTitle}
        />
        <button
          onClick={handleUpdateFile}
          className="bg-[#241f21] h-10 text-white py-1 px-4 rounded"
        >
          Update Card Title
        </button>
      </div>
    </div>
  );
};

export default EditPlaygroundTitle;

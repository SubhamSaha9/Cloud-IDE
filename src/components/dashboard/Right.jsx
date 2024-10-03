import React from "react";
import { FaPlus } from "react-icons/fa";
import Folders from "./right/Folders";
import { useDispatch } from "react-redux";
import { openModal } from "../../slice/modalSlice";

const Right = () => {
  const dispatch = useDispatch();
  const handleNewFolder = () => {
    const options = {
      show: true,
      modalType: 1,
      identifiers: {
        folderId: "",
        cardId: "",
      },
    };
    dispatch(openModal(options));
  };
  return (
    <div className="p-[2rem]">
      <div className="flex justify-between items-end wrap pt-3 py-[10px] border-b-[1px] border-black mb-3">
        <h1 className="text-[1.75rem]">
          My <b>CodePlay</b>
        </h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleNewFolder}
        >
          <FaPlus />
          New Folder
        </div>
      </div>
      <Folders />
    </div>
  );
};

export default Right;

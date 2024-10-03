import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../../slice/modalSlice";

const Left = () => {
  const dispatch = useDispatch();
  const createNewFileAndFolder = () => {
    dispatch(
      openModal({
        show: true,
        modalType: 3,
      })
    );
  };

  return (
    <div className="bg-richblack-1 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-white gap-[18px]">
        <img src="logo.png" alt="logo" className="w-3/5" />
        <h1 className="text-4xl font-semibold">Code Fest</h1>
        <h2 className="text-2xl" style={{ opacity: "0.7" }}>
          Code. Compile. Debug.
        </h2>
        <button
          className="flex items-center justify-center gap-2 bg-white text-black h-[45px] w-[90%] rounded-full transition ease-in-out delay-150 hover:scale-110 duration-300 shadow shadow-white"
          onClick={createNewFileAndFolder}
        >
          <FaPlus />
          Create New Codeplay
        </button>
      </div>
    </div>
  );
};

export default Left;

import React from "react";
import { useSelector } from "react-redux";
import NewFolder from "./modals/NewFolder";
import EditFolder from "./modals/EditFolder";
import NewPlaygroundAndFolder from "./modals/NewPlaygroundAndFolder";
import NewPlayground from "./modals/NewPlayground";
import EditPlaygroundTitle from "./modals/EditPlaygroundTitle";

const Modal = () => {
  const { modalType } = useSelector((state) => state.modal);
  return (
    <div className="fixed left-0 top-0 w-full h-screen bg-white bg-opacity-10 backdrop-blur-sm z-10 flex justify-center items-center">
      <div className="border border-richblack-2 bg-richblack-3 p-6 min-w-[300px] w-[30%] rounded-xl">
        {modalType === 1 && <NewFolder />}
        {modalType === 2 && <EditFolder />}
        {modalType === 3 && <NewPlaygroundAndFolder />}
        {modalType === 4 && <NewPlayground />}
        {modalType === 5 && <EditPlaygroundTitle />}
        {/* {modalType === 6 && <Loading />} */}
      </div>
    </div>
  );
};

export default Modal;

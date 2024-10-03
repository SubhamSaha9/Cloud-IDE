import React from "react";
import Right from "../components/dashboard/Right";
import Modal from "../components/common/Modal";
import { useSelector } from "react-redux";
import Left from "../components/dashboard/Left";

const Home = () => {
  const { show } = useSelector((state) => state.modal);
  return (
    <div className="grid grid-cols-[2fr_3fr] h-screen">
      <Left />
      <Right />
      {show && <Modal />}
    </div>
  );
};

export default Home;

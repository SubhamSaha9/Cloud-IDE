import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-richblack-1 flex justify-center items-center
        ${isFullScreen ? "h-0" : "h-[4.5rem]"} `}
    >
      <div
        className="bg-transparent border-0 flex items-center gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-[60px]" />
        <h1 className="text-2xl font-normal text-white">
          <span className="font-[700]">Code</span> Fest
        </h1>
      </div>
    </div>
  );
};

export default Navbar;

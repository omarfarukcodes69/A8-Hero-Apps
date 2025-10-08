import React from "react";
import heroIcons from "../assets/logo.png";

const Loading = () => {
  return (
    <div className=" w-full flex justify-center items-center my-25">
      <span className=" text-9xl font-bold ">L</span>
       <img src={heroIcons} className="w-30 h-30 mx-10 animate-spin"></img>
      <span className=" text-9xl font-bold ">a d i n g</span>
    </div>
  );
};

export default Loading;

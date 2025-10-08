import React from "react";
import heroIcons from "../assets/logo.png";

const CoustomLoader = () => {
  return (
    <div className=" w-full flex flex-row justify-center items-center my-3 md:my-25">
      <span className="text-2xl md:text-9xl font-bold ">L</span>
       <img src={heroIcons} className=" w-5 h-5 md:w-30 md:h-30 mx-2 md:mx-10 animate-spin"></img>
      <span className="text-2xl md:text-9xl font-bold ">a d i n g</span>
    </div>
  );
};

export default CoustomLoader;

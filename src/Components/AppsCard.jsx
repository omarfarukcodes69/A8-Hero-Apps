import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const AppsCard = ({ App }) => {
  const { title, image, downloads, ratingAvg } = App;
//   console.log(App);
  return (
    <div>
      <img
        className="max-h-70 overflow-hidden bg-gray-300 rounded-xl w-full object-fit mx-auto "
        src={image}
        alt="logo"
      />

      <h1 className="text-xl font-bold py-2">{title}</h1>
      <div className=" flex justify-between items-center ">
        <p className="bg-gray-200 font-semibold text-green-400 py-1 px-3 rounded-xl flex justify-center items-center gap-2 ">
          <FaArrowDown className="text-lg"/> {downloads}
        </p>
        <p className="bg-amber-100 text-amber-600  font-semibold rounded-xl px-3 py-1 flex justify-center items-center gap-2">
          <IoStarSharp className="text-xl" />
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppsCard;

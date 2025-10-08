import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import App from "../App";
import { Link } from "react-router";

const AllApp = ({ App }) => {
  const { id, title, image, downloads, ratingAvg } = App;
  // console.log(App);
  return (
    <Link to={`/apps/${id}`}>
      <div className="border border-gray-300 rounded p-4 shadow-lg hover:scale-105 hover:bg-[#723fe8] transition ease-in-out">
        <div className="bg-gray-300 hover:bg-[#965af0] w-full h-70 overflow-hidden rounded-xl p-10">
          <img
            className=" object-fit m-auto rounded-xl "
            src={image}
            alt="logo"
          />
        </div>

        <h1 className="text-xl font-bold py-2">{title}</h1>
        <div className=" flex justify-between items-center ">
          <p className="bg-gray-200 font-semibold text-green-400 py-1 px-3 rounded-xl flex justify-center items-center gap-2 ">
            <FaArrowDown className="text-lg" /> {downloads}
          </p>
          <p className="bg-amber-100 text-amber-600  font-semibold rounded-xl px-3 py-1 flex justify-center items-center gap-2">
            <IoStarSharp className="text-xl" />
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AllApp;

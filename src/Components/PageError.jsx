import React from "react";
import error404 from "../assets/error404.png";
import { Link } from "react-router";

const PageError = () => {
  return (
    <>
      <div className="error404 w-full h-fit flex flex-col justify-center items-center ">
        <img src={error404} className="w-90 h-90" alt="" />
        <h1 className="text-4xl text-red-400 font-bold ">
          Oops, page not found!
        </h1>
        <p className="text-gray-400 py-2">
          The page you are looking for is not available.
        </p>
        <Link to="/" className=" btn px-5 py-2 font-normal text-white bg-gradient-to-b from-[#723fe8] to-[#965af0] hover:bg-gradient-to-t ">
          Go Back{" "}
        </Link>
      </div>
    </>
  );
};

export default PageError;

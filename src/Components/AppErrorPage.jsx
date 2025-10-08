import React from "react";
import errorimg from "../assets/App-Error.png";
import { Link } from "react-router";

const AppErrorPage = () => {
  return (
    <div>
      <div className="error404 w-full h-fit flex flex-col justify-center items-center py-10">
        <img src={errorimg} className="w-60 h-65" alt="" />
        <h1 className="text-4xl text-red-400 font-bold ">
        OPPS!! APP NOT FOUND
        </h1>
        <p className="text-gray-400 py-2">
         The App you are requesting is not found on our system.  please try another apps
        </p>
        <Link
          to="/"
          className=" btn px-5 py-2 font-normal text-white bg-gradient-to-b from-[#723fe8] to-[#965af0] hover:bg-gradient-to-t "
        >
          Go Back{" "}
        </Link>
      </div>
    </div>
  );
};

export default AppErrorPage;

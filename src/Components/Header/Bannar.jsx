import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";
import HeroImage from "../../assets/hero.png"

const Bannar = () => {
  return (
    <div>
      <div className="text-center mt-10 px-5 md:px-80 flex flex-col space-y-3">
        <h1 className=" text-bold  text-6xl text-black text-shadow-2xl ">
          We Build <br /> <span className="text-[#723fe8]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-500 font-semibold">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center items-center gap-10 m-5">
          <Link
            className="flex justify-center items-center gap-2 font-bold py-2 px-3 border border-gray-300 rounded hover:bg-gradient-to-b from-[#723fe8] to-[#965af0] hover:text-white"
            to='https://play.google.com/store/games?hl=en'
          >
            <FaGooglePlay className="text-cyan-400 text-lg" />
            Google Play
          </Link>
          <Link className="flex justify-center items-center gap-2 font-bold py-2 px-3 border border-gray-300 rounded hover:bg-gradient-to-b from-[#723fe8] to-[#965af0] hover:text-white"
            to='https://www.apple.com/app-store/'>
            <FaAppStoreIos className="text-cyan-400 text-lg" />
            App Store
          </Link>
        </div>
      </div>
      <img className="mx-auto mt-15" src={HeroImage} alt="" />
      <div className=""></div>
    </div>
  );
};

export default Bannar;

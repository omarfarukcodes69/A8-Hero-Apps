import React from "react";
import Bannar from "../Components/Header/Bannar";
import Status from "../Components/Header/Status";
import useAppsData from "../Hooks/useAppsData";
import AppsCard from "../Components/AppsCard";
import { Link } from "react-router";
import PageError from "../Components/PageError";

const Home = () => {
  const { AppsData, Loading, Error } = useAppsData();
  const Apps = AppsData.slice(0, 8);
  //   console.log(Apps);
  return (
    <div>
      <Bannar></Bannar>
      <Status></Status>
      <div className="bg-white max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 rounded p-4">
        {Apps.map((App) => (
          <AppsCard key={App.id} App={App}></AppsCard>
        ))}
      </div>
      <div className=" w-full my-15 text-center">
        <Link
          to="/apps"
          className=" bg-gradient-to-b from-[#723fe8] to-[#965af0] hover:bg-gradient-to-t  px-5 py-3 text-white text-center text-xl rounded-xl "
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;

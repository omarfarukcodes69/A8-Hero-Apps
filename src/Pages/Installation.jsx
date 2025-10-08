import React, { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import InstalledApp from "../Components/InstalledApp";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    const InstalledData = JSON.parse(localStorage.getItem("InstalledApp"));
    setInstalledApps(InstalledData);
  }, []);
  console.log(installedApps);
  return (
    <div className="w-[90%] mx-auto my-15">
      <div className=" space-y-3 text-center">
        <h1 className="text-3xl font-bold"> Your Installed Apps</h1>
        <p className="text-gray-700">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Apps Found</h1>
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-outline text-gray-500"
          >
            Sort By Size <IoMdArrowDropdownCircle />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Size</a>
            </li>
            <li>
              <a>Star</a>
            </li>
          </ul>
        </div>
      </div>
      {
        installedApps.map(installedApp=><InstalledApp key={installedApp.title} installedApp={installedApp}></InstalledApp>)
      }
    </div>
  );
};

export default Installation;

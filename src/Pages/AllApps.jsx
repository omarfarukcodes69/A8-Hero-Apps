import React from "react";
import useAppsData from "../Hooks/useAppsData";
import AllApp from "../Components/AllApp";

const AllApps = () => {
  const { AppsData, Loading, Error } = useAppsData();
  //  console.log(AppsData)
  return (
    <div>
      <h1>All Apps</h1>

      <div className="bg-white max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 rounded p-4">
        {AppsData.map((App) => (
          <AllApp key={App.id} App={App}></AllApp>
        ))}
      </div>
    </div>
  );
};

export default AllApps;

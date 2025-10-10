import React, { useState } from "react";
import useAppsData from "../Hooks/useAppsData";
import AllApp from "../Components/AllApp";
import CoustomLoader from "../Components/CoustomLoader";

const AllApps = () => {
  const { AppsData, Loading, Error } = useAppsData();
  const [Search, setSearch] = useState("");
  const term = Search.trim().toLocaleLowerCase();
  const SearchApps = term
    ? AppsData.filter((App) => App.title.toLocaleLowerCase().includes(term))
    : AppsData;

  // console.log(SearchApps);
  //  console.log(AppsData)
  return (
    <>
      {/* -----title ----  */}
      <div>
        <div className="Title space-y-4 text-center px-20 my-10 ">
          <h1 className="text-4xl font-bold">Our All Applications</h1>
          <p className="text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className=" w-[90%] mx-auto my-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            ({SearchApps.length}) Apps Found
          </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>
      {/* ------ cards ------ */}
      {SearchApps.length === 0 ? (<h1 className="text-4xl font-bold text-center py-10 ">Not Found This App</h1>) : (
        <div className="bg-white max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 rounded p-4 mb-20 ">
          {Loading ? (
            <CoustomLoader />
          ) : (
            SearchApps.map((App) => <AllApp key={App.id} App={App} />)
          )}
        </div>
      )}
    </>
  );
};

export default AllApps;

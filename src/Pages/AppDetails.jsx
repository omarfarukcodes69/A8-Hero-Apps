import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useAppsData from "../Hooks/useAppsData";
import downloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";
import LikeIcon from "../assets/icon-review.png";
const AppDetails = () => {
  const [toggle, setToggle] = useState(true);
  const { AppsData, Loading, Error } = useAppsData();
  const { id } = useParams();
  if (Loading) <p>Loading......</p>;
  const App = AppsData?.find((a) => Number(a.id) === Number(id));
  if (!App) return <p>App not found.</p>;
  //   console.Log(toggle);
  const handleInstall = () => {
    setToggle(false);
    console.log("Installing....");
    const existingApp = JSON.parse(localStorage.getItem("InstalledApp"));
    let updatedApp = [];
    if (existingApp) {
      const isDuplicate = existingApp.some((a) => a.id === App.id);
      if (isDuplicate) return alert("This data already installed");
      updatedApp = [...existingApp, App];
    } else {
      updatedApp.push(App);
    }
    localStorage.setItem("InstalledApp", JSON.stringify(updatedApp));
  };

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = App;
  //   console.log(App);

  return (
    <div className=" w-[90%] mx-auto my-15">
      <section className="flex flex-col md:flex-row items-center gap-7 pb-10 ">
        <figure className="w-70 h-70 bg-white rounded-lg overflow-hidden">
          <img className=" object-cover" src={image} alt="AppIcon" />
        </figure>
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-500 ">
            Developed By: <span className="text-[#723ef8]">{companyName}</span>
          </p>
          <span className="divider"></span>
          <div className=" flex items-center gap-15">
            <aside className="space-y-1">
              <figure>
                <img className="w-7" src={downloadIcon} alt="" />
              </figure>
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-4xl font-bold">{downloads}</h1>
            </aside>

            <aside className="space-y-1">
              <figure>
                <img className="w-7" src={RatingIcon} alt="" />
              </figure>
              <p className="text-gray-500">Avarage Rating</p>
              <h1 className="text-4xl font-bold">{ratingAvg}</h1>
            </aside>

            <aside className="space-y-1">
              <figure>
                <img className="w-7" src={LikeIcon} alt="" />
              </figure>
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="text-4xl font-bold">{reviews}</h1>
            </aside>
          </div>
          <span className="divider"></span>
          <button
            onClick={() => handleInstall()}
            className={`btn bg-[#00d390] text-md font-semibold ${
              toggle ? " text-white" : " bg-gray-400 text-gray-700"
            }`}
          >
            {toggle ? `Install Now ( ${size} MB )` : "Installed"}
          </button>
        </div>
      </section>
      <span className="divider"></span>

      <section className="RattingSection"></section>
      <span className="divider"></span>

      <section className="space-y-2 ">
        <h1 className="text-lg font-bold">Description</h1>
        <p className="text-gray-500">{description}</p>
      </section>
    </div>
  );
};

export default AppDetails;

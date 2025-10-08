import { FaDownload, FaStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify/unstyled";

const InstalledApp = ({ installedApp, handleUninstall }) => {
  const { title, image, downloads, ratingAvg, size, id } = installedApp;
  return (
    <div className=" bg-white border border-gray-300 shadow-lg rounded-xl flex flex-col md:flex-row justify-between items-center my-5 px-5 py-3 gap-4 ">
      <aside className="flex items-center gap-5">
        <figure className="w-20 h-20 overflow-hidden bg-gray-500 rounded-lg p-2 ">
          <img src={image} alt="" />
        </figure>
        <section className="space-y-2">
          <h1 className="text-xl font-bold ">{title}</h1>
          <div className="flex items-center gap-7 font-semibold">
            <span className="text-green-500 flex items-center gap-1">
              <FaDownload /> {downloads}
            </span>
            <span className="text-amber-500 flex items-center gap-1">
              <FaStar /> {ratingAvg}
            </span>
            <span className="text-gray-600 flex items-center gap-1">
              {" "}
              {size} MB
            </span>
          </div>
        </section>
      </aside>
      <button
        onClick={() => handleUninstall(id)}
        className="btn bg-[#00d390] text-white"
      >
        Uninstall<ToastContainer />

      </button>
    </div>
  );
};

export default InstalledApp;

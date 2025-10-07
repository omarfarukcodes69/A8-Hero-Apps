import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm  px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center">
            <img className="max-w-10 max-h-10" src={logo} alt="Hero.oi logo" />
            <Link to='/' className="btn btn-ghost text-xl">Hero.OI</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 ">
          <NavLink
            to="/"
            className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={`hover:border-2 hover:border-[#5e24c3] hover:rounded-xl hover:px-3 hover:py-1 transform  ease-in-out`}
          >
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-b from-[#723fe8] to-[#965AF0] text-white font-bold"><FaGithub className="text-xl" />Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;

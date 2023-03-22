import React from "react";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { FaSellsy } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-1/5 h-screen px-8  border-r border-gray-300">
      <div className="pt-7">
        <img src={logo} className="w-[200px]" alt="logo" />
      </div>
      <div className="pt-6">
        <h2 className="text-[#B0B7C3] font-medium font-inter uppercase">Pages</h2>
        <ul className="mt-6">
          <li>
            <Link
              to="/users"
              className={`text-[#B0B7C3] flex items-center p-4 ${pathname === "/users" && "bg-[#F0F5FA]"} rounded-2xl`}
            >
              <FiUsers className="mr-2" /> Users
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              className={`text-[#B0B7C3] flex items-center p-4 ${pathname === "/home" && "bg-[#F0F5FA]"} rounded-2xl`}
            >
              <RxDashboard className="mr-2" /> DashBoard
            </Link>
          </li>

          <li>
            <Link
              to="/sales"
              className={`text-[#B0B7C3] flex items-center p-4 ${pathname === "/sales" && "bg-[#F0F5FA]"} rounded-2xl`}
            >
              <FaSellsy className="mr-2" /> Sales
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaBell } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
        <p className="text-gray-400">Here's your main dashboard overview</p>
      </div>
      <button className="flex items-center gap-2 bg-[#212126] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        <FaBell /> Notifications
      </button>
    </div>
  );
};

export default DashboardHeader;

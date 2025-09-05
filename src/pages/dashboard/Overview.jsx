import React, { useEffect, useState } from "react";
import { FaPlus, FaUsers, FaServer, FaChartLine, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppCard from "../../components/dashboard/AppCard";
import axios from "axios";
import { API_URL } from "../../Consts";

const Overview = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = () => {
    axios
      .get(`${API_URL}/client/dashboard`, { withCredentials: true })
      .then((res) => {
        setDashboardData(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="flex flex-col gap-10 w-full p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
          <p className="text-gray-400">Here's your main dashboard overview</p>
        </div>
        <button className="flex items-center gap-2 bg-[#212126] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          <FaBell /> Notifications
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 flex flex-col gap-4 hover:shadow-xl transition">
          <div className="flex items-center gap-3 text-white">
            <FaServer className="text-2xl text-blue-400" />
            <span className="text-lg font-semibold">Applications</span>
          </div>
          <span className="text-3xl font-bold text-white">{dashboardData?.appsCount}</span>
          <Link
            to="/dashboard/apps"
            className="text-sm text-blue-400 hover:underline mt-auto"
          >
            See all apps
          </Link>
        </div>

        <div className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 flex flex-col gap-4 hover:shadow-xl transition">
          <div className="flex items-center gap-3 text-white">
            <FaChartLine className="text-2xl text-yellow-400" />
            <span className="text-lg font-semibold">Analytics</span>
          </div>
          <span className="text-3xl font-bold text-white">--</span>
          <span className="text-sm text-gray-400 mt-auto">Coming soon</span>
        </div>

        <div className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 flex flex-col gap-4 hover:shadow-xl transition">
          <div className="flex items-center gap-3 text-white">
            <FaPlus className="text-2xl text-purple-400" />
            <span className="text-lg font-semibold">Quick Action</span>
          </div>
          <Link
            to="/dashboard/apps/new"
            className="text-sm text-purple-400 hover:underline mt-auto"
          >
            Create new app
          </Link>
        </div>
      </div>

      {/* Apps Section */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Your Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardData.appsCount === 0 ? (
            <p className="text-gray-400">
              You have no applications. <Link to="/dashboard/apps/new" className="text-blue-400 hover:underline">Create one now</Link>.
            </p>
          ) : (
            dashboardData?.clientApps?.map((app) => <AppCard key={app.id} app={app} />)
          )}
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="">
        <Link
          to="/dashboard/apps/new"
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FaPlus /> Create New App
        </Link>
        
      </div>
    </div>
  );
};

export default Overview;

import React, { useEffect, useState } from "react";
import {
  FaPlus,
  FaServer,
  FaChartLine,
  FaBell,
  FaClock,
  FaUserAlt,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AppCard from "../../dashboard/apps/AppCard";
import { FiExternalLink } from "react-icons/fi";

const DashboardPreview = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fakeData = {
      appsCount: 3,
      clientApps: [
        {
          id: "app1",
          name: "Project Alpha",
          description: "A social media analysis tool",
          createdAt: new Date("2024-08-01").toISOString(),
          updatedAt: new Date("2025-08-29").toISOString(),
        },
        {
          id: "app2",
          name: "FinTrack Pro",
          description: "Expense tracking and budgeting system",
          createdAt: new Date("2024-10-11").toISOString(),
          updatedAt: new Date("2025-07-15").toISOString(),
        },
        {
          id: "app3",
          name: "ShopSmart",
          description: "AI-powered e-commerce assistant",
          createdAt: new Date("2024-09-20").toISOString(),
          updatedAt: new Date("2025-09-01").toISOString(),
        },
      ],
    };

    setTimeout(() => setDashboardData(fakeData), 1000);
  }, []);

  if (!dashboardData) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center min-h-screen pb-10">
      <div className="absolute top-0 w-full gradient-bg-reverse h-[100px]"></div>
      {/* ---------- Mac Browser (large screens) ---------- */}
      <div className="hidden md:block w-full max-w-6xl">
        <div className="bg-[#232328] rounded-t-xl px-4 py-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="bg-[#1e1e22] rounded-b-xl shadow-xl p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Modern Dashboard
              </h1>
              <p className="text-gray-400 text-sm mt-3">
                Here’s your main dashboard overview
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#212126] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <FaBell /> Notifications
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-[#212126] p-6 rounded-xl border border-gray-700 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white">
                <FaServer className="text-2xl text-blue-400" />
                <span className="text-lg font-semibold">Applications</span>
              </div>
              <span className="text-3xl font-bold text-white">
                {dashboardData.appsCount}
              </span>
              <Link className="text-sm text-blue-400 hover:underline mt-auto">
                See all apps
              </Link>
            </div>

            <div className="bg-[#212126] p-6 rounded-xl border border-gray-700 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white">
                <FaChartLine className="text-2xl text-yellow-400" />
                <span className="text-lg font-semibold">Analytics</span>
              </div>
              <span className="text-3xl font-bold text-white">--</span>
              <span className="text-sm text-gray-400 mt-auto">Coming soon</span>
            </div>

            <div className="bg-[#212126] p-6 rounded-xl border border-gray-700 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white">
                <FaPlus className="text-2xl text-purple-400" />
                <span className="text-lg font-semibold">Quick Action</span>
              </div>
              <Link className="text-sm text-purple-400 hover:underline mt-auto">
                Create new app
              </Link>
            </div>
          </div>

          {/* Apps Section */}
          <div className="mt-8">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Your Applications
              </h2>
              {dashboardData.appsCount > 0 && (
                <Link className="text-xs text-blue-500">View all</Link>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dashboardData.clientApps.map((app) => (
                <Link className="relative bg-[#212126] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col gap-4">
                  {/* App Name & Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {app.name}
                    </span>
                    <Link
                      className="text-gray-400 hover:text-blue-400 transition"
                      title="Open App"
                    >
                      <FiExternalLink size={18} />
                    </Link>
                  </div>

                  {/* App Description */}
                  {app.description && (
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {app.description}
                    </p>
                  )}

                  {/* Stats / Badges */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                    <div className="flex items-center gap-1">
                      <FaUserAlt /> <span>{app?.users?.length || 0} Users</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaClock />{" "}
                      <span>
                        Updated{" "}
                        {app.updatedAt
                          ? new Date(app.updatedAt).toLocaleDateString()
                          : "-"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-4">
                    <Link className="text-primary text-sm hover:underline">
                      Users
                    </Link>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- iPhone (small screens) ---------- */}
      <div className="block md:hidden relative bg-black rounded-[3rem] border-[8px] border-gray-700 shadow-2xl w-[375px] h-[812px] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20"></div>

        {/* Screen */}
        <div className="relative z-10 h-full w-full overflow-y-hidden no-scrollbar">
          <div className="bg-[#1e1e22] p-4 py-10">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-lg font-bold text-white">
                  Modern Dashboard
                </h1>
                <p className="text-[10px] text-gray-300">Here's your dashboard overview</p>
              </div>

              <div className="flex items-center gap-4">
                <FaBell className="text-white text-lg" />
                <FaSearch />
              </div>
            </div>

            {/* Apps Section */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold  text-white mb-3">
                Applications
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {dashboardData.clientApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition">
                <FaPlus /> Create New App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;

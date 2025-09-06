import React from "react";
import { Link } from "react-router-dom";
import { FaServer } from "react-icons/fa";

const AppHeader = ({ app }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 className="text-3xl font-bold text-white mb-1">{app.name}</h1>
      <p className="text-gray-400 text-sm">Manage your app, API key, and users</p>
    </div>
    <div className="flex flex-col md:flex-row gap-3">
      <Link
        to={`/dashboard/apps/${app.id}/start`}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default AppHeader;

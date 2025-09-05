import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../Consts";
import { FiCopy, FiEye, FiEyeOff, FiCheck, FiRefreshCw } from "react-icons/fi";
import { FaUsers, FaServer, FaClock } from "react-icons/fa";
import { formatDate } from "../../utils/utils";

const AppOverview = () => {
  const { appId } = useParams();
  const [app, setApp] = useState(null);
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchApp = async () => {
    try {
      const res = await axios.get(`${API_URL}/client/app/${appId}`, {
        withCredentials: true,
      });
      setApp(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchApp();
  }, [appId]);

  const handleCopy = () => {
    if (!app?.apiKey) return;
    navigator.clipboard.writeText(app.apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    // placeholder for API call to regenerate API key
    alert("API key regenerated (mock)!");
  };

  if (!app) return <div className="text-gray-300 p-6">Loading...</div>;

  return (
    <div className="w-full p-4 md:p-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">{app.name}</h1>
          <p className="text-gray-400 text-sm">
            Manage your app, API key, and users
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Link
            to={`/dashboard/app/${app.id}/users/new`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Create User
          </Link>
        </div>
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* App Info */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-3">
          <h2 className="text-white font-semibold text-lg flex items-center gap-2">
            <FaServer className="text-blue-400" /> App Info
          </h2>
          <p className="text-gray-400 text-sm">ID: {app.id}</p>
          <p className="text-gray-400 text-sm">
            Created: {formatDate(app.createdAt)}
          </p>
          <p className="text-gray-400 text-sm">
            Updated: {formatDate(app.updatedAt)}
          </p>
        </div>

        {/* API Key */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold">API Key</span>
            <div className="flex gap-2">
              <button
                onClick={() => setShowKey(!showKey)}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                {showKey ? (
                  <FiEyeOff className="text-gray-300" />
                ) : (
                  <FiEye className="text-gray-300" />
                )}
              </button>
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                {copied ? (
                  <FiCheck className="text-green-400" />
                ) : (
                  <FiCopy className="text-gray-300" />
                )}
              </button>
              <button
                onClick={handleRegenerateKey}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <FiRefreshCw className="text-gray-300" />
              </button>
            </div>
          </div>
          <div className="font-mono text-white text-sm select-all break-all bg-[#111113] p-3 rounded-md">
            {showKey ? app.apiKey : "••••••••••••••••••••••••••••••••"}
          </div>
          <p className="text-gray-500 text-xs">
            Keep this key safe. Do not share publicly.
          </p>
        </div>

        {/* Users count */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <FaUsers className="text-green-400" /> Users
          </div>
          <p className="text-white font-bold text-3xl">
            {app.users?.length || 0}
          </p>
          <div className="flex gap-2 mt-auto">
            {app.users?.length > 0 && (
              <Link
                to={`/dashboard/apps/${app.id}/users`}
                className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition text-sm"
              >
                View All
              </Link>
            )}
            <Link
              to={`/dashboard/apps/${app.id}/users/new`}
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition text-sm"
            >
              + Add new User
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <FaUsers className="text-green-400" /> Recent Users
          </h2>
          {app.users?.length > 0 && (
            <Link
              to={`/dashboard/apps/${app.id}/users`}
              className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition text-sm"
            >
              View All
            </Link>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-[#111113] text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Email
                </th>

                <th scope="col" className="px-4 py-3">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody>
              {app.users.length > 0 ? (
                app.users?.slice(0, 5).map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-700 hover:bg-[#2a2a2f]"
                  >
                    <td className="px-4 py-2">{user.email}</td>

                    <td className="px-4 py-2">{formatDate(user.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 flex items-center gap-2">
        <FaClock /> Last updated: {formatDate(app.updatedAt)}
      </div>
    </div>
  );
};

export default AppOverview;

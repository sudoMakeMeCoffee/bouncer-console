import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../Consts";
import { FiCopy, FiEye, FiEyeOff, FiCheck, FiRefreshCw } from "react-icons/fi";

const AppOverview = () => {
  const { appId } = useParams();
  const [app, setApp] = useState(null);
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchApp = async () => {
    try {
      const res = await axios.get(`${API_URL}/client/app/${appId}`, { withCredentials: true });
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
    <div className="w-full p-4 md:p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">{app.name}</h1>
          <p className="text-gray-400">Manage your application and API key</p>
        </div>
        <Link
          to={`/dashboard/app/${app.id}/users/new`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create New User
        </Link>
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* App Info */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <h2 className="text-white font-semibold text-lg">App Info</h2>
          <p className="text-gray-400 text-sm">App ID: {app.id}</p>
          <p className="text-gray-400 text-sm">Owner: {app.client?.email || "N/A"}</p>
          <p className="text-gray-400 text-sm">Created At: {new Date(app.client?.createdAt || Date.now()).toLocaleDateString()}</p>
        </div>

        {/* API Key */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-semibold">API Key</span>
            <div className="flex gap-2">
              <button
                onClick={() => setShowKey(!showKey)}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                {showKey ? <FiEyeOff className="text-gray-300" /> : <FiEye className="text-gray-300" />}
              </button>
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-300" />}
              </button>
              <button
                onClick={handleRegenerateKey}
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <FiRefreshCw className="text-gray-300" />
              </button>
            </div>
          </div>
          <div className="font-mono text-white text-sm select-all break-all">
            {showKey ? app.apiKey : "••••••••••••••••"}
          </div>
          <p className="text-gray-500 text-xs">Keep this key safe. Do not share publicly.</p>
        </div>

        {/* Users */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-3 items-start">
          <span className="text-gray-400 text-sm">Users</span>
          <p className="text-white font-bold text-2xl">{app.client?.usersCount || 0}</p>
          <div className="flex gap-2 mt-2">
            <Link
              to={`/dashboard/app/${app.id}/users`}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition text-sm"
            >
              See All Users
            </Link>
            <Link
              to={`/dashboard/app/${app.id}/users/new`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
            >
              Create User
            </Link>
          </div>
        </div>

        {/* Placeholder Stats */}
        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <span className="text-gray-400 text-sm">Active Sessions</span>
          <p className="text-white font-bold text-2xl">12</p>
        </div>

        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <span className="text-gray-400 text-sm">Requests Today</span>
          <p className="text-white font-bold text-2xl">256</p>
        </div>

        <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-2">
          <span className="text-gray-400 text-sm">Errors Today</span>
          <p className="text-red-500 font-bold text-2xl">2</p>
        </div>
      </div>
    </div>
  );
};

export default AppOverview;

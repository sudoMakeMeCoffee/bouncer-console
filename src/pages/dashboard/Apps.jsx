import React, { use, useEffect, useState } from "react";
import Home from "../Home";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Consts";
import AppCard from "../../components/dashboard/AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    getAllApps();
  }, []);

  const getAllApps = () => {
    axios
      .get(`${API_URL}/client/app`, { withCredentials: true })
      .then((res) => {
        setApps(res.data.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-full flex flex-col gap-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Applications</h1>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
        <Link
          to="/dashboard/apps/new"
          className="relative bg-[#212126] rounded-xl p-6 border border-gray-700 border-dashed shadow-md hover:shadow-xl transition-all flex items-center justify-center"
        >
          <span className="text-lg font-semibold text-white flex items-center gap-2">
            <FaPlus /> New Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Apps;

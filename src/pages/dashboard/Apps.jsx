import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Consts";
import AppCard from "../../components/dashboard/AppCard";
import AppsSkeleton from "../../components/skeletons/AppsSkeleton";
const Apps = () => {
  const [apps, setApps] = useState(null);

  useEffect(() => {
    getAllApps();
  }, []);

  const getAllApps = () => {
    axios
      .get(`${API_URL}/client/app`, { withCredentials: true })
      .then((res) => setApps(res.data.data))
      .catch((e) => {
        console.log(e);
        setApps([]);
      });
  };

  if (apps === null) return <AppsSkeleton />; // show skeleton while loading

  return (
    <div className="w-full flex flex-col gap-8 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Applications</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
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

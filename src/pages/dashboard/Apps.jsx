import React, { use, useEffect, useState } from "react";
import Home from "../Home";
import App from "../../components/dashboard/App";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Consts";

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
    <div className="w-full">
      <h1 className="text-2xl">Applications</h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {apps.map((app) => (
          <App key={app.id} app={app} />
        ))}
        <Link
          to="/dashboard/apps/new"
          className=" bg-[#212126] rounded-md mt-4 p-4 flex items-center justify-center border border-dotted"
        >
          <span className="text-sm flex items-center gap-2">
            <FaPlus /> New Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Apps;

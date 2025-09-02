import React from "react";
import Home from "../Home";
import App from "../../components/dashboard/App";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
   <div>
    <h1 className="text-2xl">Applications</h1>

    <div>
      <App/>
      <Link to="/dashboard/apps/new" className="w-[300px] h-[200px] bg-[#212126] rounded-md mt-4 p-4 flex items-center justify-center border border-dotted">
        <span className="text-sm flex items-center gap-2"><FaPlus/> New Application</span>
      </Link>
    </div>
   </div>
  )
};

export default Apps;

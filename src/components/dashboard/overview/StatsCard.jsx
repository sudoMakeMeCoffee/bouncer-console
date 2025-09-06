import React from "react";
import { Link } from "react-router-dom";

const StatsCard = ({ icon, title, value, link, linkText, comingSoon }) => {
  return (
    <div className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 flex flex-col gap-4 hover:shadow-xl transition">
      <div className="flex items-center gap-3 text-white">
        {icon}
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <span className="text-3xl font-bold text-white">{value}</span>
      {comingSoon ? (
        <span className="text-sm text-gray-400 mt-auto">{comingSoon}</span>
      ) : (
        link && (
          <Link to={link} className="text-sm mt-auto text-blue-400 hover:underline">
            {linkText}
          </Link>
        )
      )}
    </div>
  );
};

export default StatsCard;

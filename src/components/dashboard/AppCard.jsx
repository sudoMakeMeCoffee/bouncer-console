import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const AppCard = ({ app }) => {
  return (
    <div className="relative bg-[#212126] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-all">
      {/* App Name & Link */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{app.name}</span>
        <Link
          to={`/dashboard/apps/${app.id}`}
          className="text-gray-400 hover:text-blue-400 transition"
          title="Open App"
        >
          <FiExternalLink size={18} />
        </Link>
      </div>

    </div>
  );
};

export default AppCard;

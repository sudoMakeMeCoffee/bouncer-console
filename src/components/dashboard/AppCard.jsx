import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaUserAlt, FaKey, FaClock } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <Link  to={`/dashboard/apps/${app.id}`} className="relative bg-[#212126] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col gap-4">
      {/* App Name & Link */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{app.name}</span>
        <Link
          to={`/dashboard/apps/${app.id}`}x
          className="text-gray-400 hover:text-blue-400 transition"
          title="Open App"
        >
          <FiExternalLink size={18} />
        </Link>
      </div>

      {/* App Description */}
      {app.description && (
        <p className="text-gray-400 text-sm line-clamp-2">{app.description}</p>
      )}

      {/* Stats / Badges */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
        <div className="flex items-center gap-1">
          <FaUserAlt /> <span>{app.users.length || 0} Users</span>
        </div>
        
        <div className="flex items-center gap-1">
          <FaClock /> <span>Updated {app.updatedAt ? new Date(app.updatedAt).toLocaleDateString() : "-"}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        
        <Link
          to={`/dashboard/apps/${app.id}/users`}
          className="text-primary text-sm hover:underline"
        >
          Users
        </Link>
      </div>
    </Link>
  );
};

export default AppCard;

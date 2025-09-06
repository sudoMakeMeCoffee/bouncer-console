import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const UsersCard = ({ app }) => (
  <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-4">
    <div className="flex items-center gap-2 text-white font-semibold">
      <FaUsers className="text-green-400" /> Users
    </div>
    <p className="text-white font-bold text-3xl">{app.users?.length || 0}</p>
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
        to={`/dashboard/apps/${app.id}/start`}
        className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition text-sm"
      >
        + Add new User
      </Link>
    </div>
  </div>
);

export default UsersCard;

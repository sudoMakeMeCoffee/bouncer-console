import React from "react";
import { FaUsers, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/utils";


const RecentUsersTable = ({ app }) => (
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
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Joined</th>
          </tr>
        </thead>
        <tbody>
          {app.users?.length > 0 ? (
            app.users.slice(0, 5).map((user) => (
              <tr key={user.id} className="border-b border-gray-700 hover:bg-[#2a2a2f]">
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{formatDate(user.createdAt)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="px-4 py-2 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="text-xs text-gray-500 flex items-center gap-2 mt-3">
      <FaClock /> Last updated: {formatDate(app.updatedAt)}
    </div>
  </div>
);

export default RecentUsersTable;

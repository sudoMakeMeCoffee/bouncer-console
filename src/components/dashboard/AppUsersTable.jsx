import { useEffect, useState } from "react";
import ProfileIcon from "../../assets/images/profile-icon.png";
import axios from "axios";
import { API_URL } from "../../Consts";
import { useParams, Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

const AppUsersTable = ({appUsers}) => {
  const { appId } = useParams();

  return (
    <table className="w-full text-left text-sm rounded-xl overflow-hidden">
      <thead className="bg-[#111113]">
        <tr className="font-semibold text-xs text-gray-400">
          <th className="p-3">User</th>
          <th className="p-3">Joined</th>
        </tr>
      </thead>

      <tbody>
        {appUsers?.length === 0 || !appUsers ? (
          <tr className="bg-[#1E1E22]">
            <td colSpan={2} className="text-center p-6 text-gray-400">
              No users found.{" "}
              <Link
                to={`/dashboard/apps/${appId}/start`}
                className="text-primary hover:underline"
              >
                Start adding users.
              </Link>
            </td>
          </tr>
        ) : (
          appUsers?.map((user) => (
            <tr
              key={user.id}
              className="bg-[#1E1E22] hover:bg-[#2a2a2f] transition-colors"
            >
              <td className="flex items-center gap-3 p-3">
                <img
                  src={ProfileIcon}
                  alt=""
                  className="w-[45px] h-[45px] rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-white">{user.email}</span>
                  <span className="text-gray-400">{user.username || ""}</span>
                </div>
              </td>
              <td className="p-3">{formatDate(user.createdAt)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AppUsersTable;

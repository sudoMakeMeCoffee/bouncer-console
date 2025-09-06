import React from "react";
import { FaServer } from "react-icons/fa";
import { formatDate } from "../../../utils/utils";

const AppInfoCard = ({ app }) => (
  <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-3">
    <h2 className="text-white font-semibold text-lg flex items-center gap-2">
      <FaServer className="text-blue-400" /> App Info
    </h2>
    <p className="text-gray-400 text-sm">ID: {app.id}</p>
    <p className="text-gray-400 text-sm">Created: {formatDate(app.createdAt)}</p>
    <p className="text-gray-400 text-sm">Updated: {formatDate(app.updatedAt)}</p>
  </div>
);

export default AppInfoCard;

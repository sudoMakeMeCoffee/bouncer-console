import React from "react";
import { Link } from "react-router-dom";
import AppCard from "../apps/AppCard";

const AppsSection = ({ appsCount, clientApps }) => {
  return (
    <div>
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">Your Applications</h2>
        {appsCount > 0 && (
          <Link className="text-xs text-blue-500" to={"/dashboard/apps"}>
            View all
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {appsCount === 0 ? (
          <p className="text-gray-400">
            You have no applications.{" "}
            <Link
              to="/dashboard/apps/new"
              className="text-blue-400 hover:underline"
            >
              Create one now
            </Link>
            .
          </p>
        ) : (
          clientApps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default AppsSection;

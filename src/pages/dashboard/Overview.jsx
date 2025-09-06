import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Consts";
import { FaPlus, FaUsers, FaServer, FaChartLine } from "react-icons/fa";
import OverviewSkeleton from "../../components/skeletons/OverviewSkeleton";
import AppsSection from "../../components/dashboard/overview/AppsSection";
import QuickAction from "../../components/dashboard/overview/QuickAction";
import StatsCard from "../../components/dashboard/overview/StatsCard";
import DashboardHeader from "../../components/dashboard/overview/DashboardHeader";

const Overview = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/client/dashboard`, { withCredentials: true })
      .then((res) => setDashboardData(res.data.data))
      .catch(() => setDashboardData({ appsCount: 0, clientApps: [] }));
  }, []);

  if (!dashboardData) return <OverviewSkeleton />;

  return (
    <div className="flex flex-col gap-10 w-full py-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          icon={<FaServer className="text-2xl text-blue-400" />}
          title="Applications"
          value={dashboardData.appsCount}
          link="/dashboard/apps"
          linkText="See all apps"
        />
        <StatsCard
          icon={<FaChartLine className="text-2xl text-yellow-400" />}
          title="Analytics"
          value="--"
          comingSoon="Coming soon"
        />
        <StatsCard
          icon={<FaPlus className="text-2xl text-purple-400" />}
          title="Quick Action"
          link="/dashboard/apps/new"
          linkText="Create new app"
        />
      </div>

      <AppsSection appsCount={dashboardData.appsCount} clientApps={dashboardData.clientApps} />

      <QuickAction
        icon={<FaPlus />}
        text="Create New App"
        link="/dashboard/apps/new"
        colorClass="bg-blue-500"
      />
    </div>
  );
};

export default Overview;

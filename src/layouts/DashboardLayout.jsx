import React from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import TopNavTabs from "../components/dashboard/TopNavTabs";
import AppTopNavTabs from "../components/dashboard/AppTopNavTabs"; // alternative top nav

const DashboardLayout = () => {
  const location = useLocation();
  console.log(location);
  const isAppPage = useMatch("/dashboard/apps/:id/*");

  return (
    <div className="bg-[#1b1b1f]">
      <Navbar />

      {/* Conditionally render TopNavTabs */}
      {isAppPage ? <AppTopNavTabs /> : <TopNavTabs />}

      <div className="dashboard-wrapper pt-[150px] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

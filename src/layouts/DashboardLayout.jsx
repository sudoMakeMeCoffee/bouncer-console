import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import TopNavTabs from "../components/dashboard/TopNavTabs";

const DashboardLayout = () => {
  
  return (
    <div>
      <Navbar />
      <TopNavTabs/>
      <div className="wrapper mt-[128px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import TopNavTabs from "../components/dashboard/TopNavTabs";

const DashboardLayout = () => {
  
  return (
    <div className="bg-[#1b1b1f]">
      <Navbar />
      <TopNavTabs/>
      <div className="wrapper pt-[150px] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

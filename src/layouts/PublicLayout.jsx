import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/public/Navbar";

const PublicLayout = () => {
  useEffect(() => {
    document.title = `Bouncer.com`;
  }, []);

  return (
    <div className="">
      <Navbar />

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;

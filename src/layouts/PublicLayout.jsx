import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/public/global/Navbar";
import useAuthStore from "../store/useAuthStore";
import GlobalLoader from "../components/skeletons/GlobalLoader";
const PublicLayout = () => {
  const { loading } = useAuthStore();

  useEffect(() => {
    document.title = `Bouncer.com`;
  }, []);


  if(loading) return <GlobalLoader/>;

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

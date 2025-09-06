import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import profileIcon from "../../../assets/images/profile-icon.png"
import { HiBars2 } from "react-icons/hi2";
import clsx from "clsx";
import axios from "axios";

import { API_URL } from "../../../Consts";
import useAuthStore from "../../../store/useAuthStore";

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [appName, setAppName] = useState("");

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > NAVBAR_HEIGHT) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Fetch app name if in AppOverview page
  useEffect(() => {
    const match = location.pathname.match(/^\/dashboard\/apps\/([a-f0-9\-]+)(\/.*)?$/);

    if (match) {
      const appId = match[1];
      axios
        .get(`${API_URL}/client/app/${appId}`, { withCredentials: true })
        .then((res) => setAppName(res.data.data.name))
        .catch((err) => console.log(err));
    } else {
      setAppName(""); // reset when not on app page
    }
  }, [location.pathname]);

  const handleLogout = () => {
    axios
      .post(`${API_URL}/auth/client/logout`, {}, { withCredentials: true })
      .then(() => (window.location.href = "/"))
      .catch((e) => console.log(e));
  };

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 z-50 bg-[#111113] border-b-[0.2px] border-gray-800 transition-transform duration-300",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <div className="dashboard-wrapper h-[64px] flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 font-normal">
          <Link to="/dashboard" className="font-bold text-md">
            B<span className="text-primary">OU</span>NCER
          </Link>
          {appName && (
            <>
              <span className="text-gray-700 text-sm">/</span>


              <Link  to={"/dashboard/apps"} className="text-gray-300 font-normal text-sm">
                Applications
              </Link>

              <span className="text-gray-700 text-sm">/</span>

              
              <Link  className="text-gray-300 font-normal text-sm">
                {appName}
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <img
            src={profileIcon}
            alt={user.username}
            className="w-[30px] h-[30px] cursor-pointer rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

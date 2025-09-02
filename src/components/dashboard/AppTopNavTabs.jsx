import { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink
import clsx from "clsx";

const NAVBAR_HEIGHT = 64;

const TopNavTabs = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav
      className={clsx(
        "bg-[#111113] w-full fixed top-[64.3px] z-50 transition-transform duration-300 text-white h-[50px] border-b-[0.1px] border-gray-800",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <div className="max-w-full mx-[16px] md:mx-[32px] flex items-center h-full">
        <div className="flex items-center gap-8 text-sm h-full">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              clsx(
                "h-full flex items-center px-1",
                isActive
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400"
              )
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/dashboard/apps"
            className={({ isActive }) =>
              clsx(
                "h-full flex items-center px-1",
                isActive
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400"
              )
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default TopNavTabs;

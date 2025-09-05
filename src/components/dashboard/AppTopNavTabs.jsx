import { useEffect, useState, useCallback } from "react";
import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";

const NAVBAR_HEIGHT = 64;

const TopNavTabs = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { appId } = useParams(); 

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

  if (!appId) return null; // If no app ID, don't render tabs

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
      <div className="dashboard-wrapper flex items-center h-full">
        <div className="flex items-center gap-8 text-sm h-full">
          <NavLink
            to={`/dashboard/apps/${appId}`}
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
            to={`/dashboard/apps/${appId}/start`}
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
            Start
          </NavLink>

          <NavLink
            to={`/dashboard/apps/${appId}/users`}
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

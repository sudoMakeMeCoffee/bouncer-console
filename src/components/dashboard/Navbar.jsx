import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import clsx from "clsx";

import useAuthFormStore from "../../store/useAuthFormStore";
import useAuthStore from "../../store/useAuthStore";
import axios from "axios";
import { API_URL } from "../../Consts";

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const { openSignup, openLogin } = useAuthFormStore();
  const { isAuthenticated, user } = useAuthStore();

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

  const handleLogout = () => {
    axios
      .post(`${API_URL}/auth/client/logout`, {}, { withCredentials: true })
      .then(() => (window.location.href = "/"))
      .catch((e) => console.log(e));
  };

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 z-50 bg-[#111113] border-b-[0.2px] border-gray-800  transition-transform duration-300",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <div className="dashboard-wrapper h-[64px] flex items-center justify-between">
        <Link to="/" className="font-bold text-md">
          B<span className="text-primary">OU</span>NCER
        </Link>

        <div className="flex items-center">
          <img
            src={`https://avatar.iran.liara.run/username?username=${user.username}`}
            alt={user.username}
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

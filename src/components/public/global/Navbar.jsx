import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import clsx from "clsx";

import useAuthFormStore from "../../../store/useAuthFormStore";
import useAuthStore from "../../../store/useAuthStore";
import api from "../../../api/axios";

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const { openSignup, openLogin } = useAuthFormStore();
  const { isAuthenticated, setLoading } = useAuthStore();

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
    setLoading(true);
    api
      .post(`/auth/client/logout`, {}, { withCredentials: true })
      .then(() => {
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };
  return (
    <nav
      className={clsx(
        "w-full fixed top-0 z-50 glassy-navbar transition-transform duration-300",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <div className="wrapper h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-md">
          B<span className="text-primary">OU</span>NCER
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-5">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="text-xs font-medium sm:text-sm"
              >
                Log Out
              </button>
              <Link to="/dashboard" className="btn-primary btn-md">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={openLogin}
                className="text-xs font-medium sm:text-sm"
              >
                Log In
              </button>
              <button onClick={openSignup} className="btn-primary btn-md">
                Sign Up
              </button>
            </>
          )}

          {/* Mobile Menu Icon */}
          <HiBars2 className="cursor-pointer text-lg sm:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import useAuthFormStore from "../store/useAuthFormStore";
import useAuthStore from "../store/useAuthStore";
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  const {
    openSignup,
    openLogin,
    isSignupOpen,
    isLoginOpen,
    closeSignup,
    closeLogin,
    openInfo,
  } = useAuthFormStore();
  const { isAuthenticates, user, setIsAuthenticated, setUser } = useAuthStore();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full h-[64px] fixed top-0 z-50 glassy-navbar ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="wrapper h-full flex items-center justify-between">
        <h1 className="font-bold text-md">
          B<span className="text-primary">OU</span>NCER
        </h1>

        <div className=" items-center gap-4 text-sm hidden sm:flex">
          <span>Products</span>
          <span>Solutions</span>
          <span>Docs</span>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => openLogin()}
            className="text-xs font-medium  sm:text-sm"
          >
            Log in
          </button>

          <button onClick={() => openSignup()} className="btn-primary btn-md">
            Sign Up
          </button>

          <HiBars2 className="cursor-pointer text-lg sm:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

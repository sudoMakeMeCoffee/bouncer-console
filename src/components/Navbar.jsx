import React from "react";
import { Link } from "react-router-dom";
import useSignupStore from "../store/useSignupStore";

const Navbar = () => {

     const openSignup = useSignupStore((state) => state.openSignup);

  return (
    <nav className="w-full h-[64px] fixed top-0 z-50">
      <div className="wrapper h-full flex items-center justify-between">
        <h1 className="font-bold text-md">
          B<span className="text-primary">OU</span>NCER
        </h1>

        <div className="flex items-center gap-4 text-sm">
          <span>Products</span>
          <span>Solutions</span>
          <span>Docs</span>
        </div>

        <div className="flex items-center gap-4">
            <Link to={"/login"} className="text-sm font-medium">Log in</Link>
       
            <button onClick={openSignup}  className="btn-primary btn-md">
                Sign Up
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

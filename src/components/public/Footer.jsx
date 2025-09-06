import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111113] border-t border-gray-800 py-12">
      <div className="wrapper flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-lg">Bouncer</h3>
          <p className="text-gray-400 text-sm">
            Developer-first authentication platform.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold">Company</h4>
            <Link to="/" className="text-gray-400 text-sm hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 text-sm hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold">Resources</h4>
            <Link to="/docs" className="text-gray-400 text-sm hover:text-white">
              Docs
            </Link>
            <Link to="/api" className="text-gray-400 text-sm hover:text-white">
              API
            </Link>
            <Link to="/support" className="text-gray-400 text-sm hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-center text-xs mt-10">
        © {new Date().getFullYear()} Bouncer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

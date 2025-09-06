import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
      <p>
        © {new Date().getFullYear()} Bouncer. All rights reserved. |
        <Link to="/privacy" className="ml-1 hover:text-primary">Privacy</Link> |
        <Link to="/terms" className="ml-1 hover:text-primary">Terms</Link>
      </p>
    </footer>
  );
};

export default Footer;

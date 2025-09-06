import React from "react";
import { Link } from "react-router-dom";

const QuickAction = ({ icon, text, link, colorClass }) => {
  return (
    <Link
      to={link}
      className={`flex-1 ${colorClass} hover:opacity-90 text-white p-4 rounded-lg flex items-center justify-center gap-2 transition`}
    >
      {icon} {text}
    </Link>
  );
};

export default QuickAction;

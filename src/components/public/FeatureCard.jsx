import React from "react";
import { FaBolt, FaLock, FaCode } from "react-icons/fa";

const iconMap = {
  security: <FaLock className="text-4xl text-primary" />,
  fast: <FaBolt className="text-4xl text-primary" />,
  developer: <FaCode className="text-4xl text-primary" />,
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col gap-4">
      <div>{iconMap[icon]}</div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;

import React from "react";
import { FaBook, FaCode, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <FaRocket className="text-xl text-primary" />,
    description: "Learn how to set up your first project and start building applications quickly.",
    link: "/docs/getting-started",
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: <FaCode className="text-xl text-primary" />,
    description: "Detailed documentation of all available endpoints, parameters, and examples.",
    link: "/docs/api",
  },
  {
    id: "guides",
    title: "Guides",
    icon: <FaBook className="text-xl text-primary" />,
    description: "Step-by-step tutorials for common tasks, integrations, and advanced use cases.",
    link: "/docs/guides",
  },
];

const DocsSections = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <div className="p-6 flex flex-col gap-4">
            <div>{section.icon}</div>
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <p className="text-sm text-gray-400">{section.description}</p>
            <Link
              to="/dashboard" // simple redirect for now
              className="mt-2 text-primary text-sm font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocsSections;
